import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('none'); // Initialize as 'none'
  const [people, setPeople] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: '',
    dob: '',
    aadhar: '',
    mobile: '',
    age: '',
  });
  const [searchAadhar, setSearchAadhar] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(storedPeople);
  }, []);

  const calculateAge = (dob) => {
    const diff = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      setNewPerson({ ...newPerson, [name]: value });
    } else {
      setNewPerson({
        ...newPerson,
        [name]: value,
        age: name === 'dob' ? calculateAge(value) : newPerson.age,
      });
    }
  };

  const handleSavePerson = () => {
    const { name, dob, aadhar, mobile, age } = newPerson;

    if (!name || !dob || !aadhar || !mobile || !age) {
      alert('All fields are required!');
      return;
    }

    if (aadhar.length !== 12) {
      alert('Aadhar number must be 12 digits.');
      return;
    }

    if (mobile.length !== 10) {
      alert('Mobile number must be 10 digits.');
      return;
    }

    const updatedPeople = [...people, newPerson];
    setPeople(updatedPeople);
    localStorage.setItem('people', JSON.stringify(updatedPeople));
    setNewPerson({ name: '', dob: '', aadhar: '', mobile: '', age: '' });
    setSaveMessage('Saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleDeletePerson = (index) => {
    const updatedPeople = people.filter((_, idx) => idx !== index);
    setPeople(updatedPeople);
    localStorage.setItem('people', JSON.stringify(updatedPeople));
  };

  const handleSearch = () => {
    const match = people.find((person) => person.aadhar === searchAadhar);
    setSearchResult(match || 'No match found');
  };

  return (
    <div className="min-h-screen p-3 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 ">
      <h1 className="text-3xl p-2 font-bold text-center mb-8 tracking-wider text-white animate__animated animate__zoomIn">
        People Info Management
      </h1>

      <div className="max-w-4xl mx-auto bg-transparent rounded-md p-6">
        {/* Heading with Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'add'
                ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'
                : 'bg-pink-400 font-bold'
            } hover:scale-105 transition-transform duration-300 animate__animated animate__zoomInLeft animate__delay-1s `}
            onClick={() => setActiveTab('add')}
          >
            Add New Person
          </button>

          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'retrieve'
                ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'
                : 'bg-pink-400 font-bold'
            } hover:scale-105 transition-transform duration-300 animate__animated animate__zoomInRight animate__delay-1s`}
            onClick={() => setActiveTab('retrieve')}
          >
            Retrieve Information
          </button>
        </div>

        {/* Dynamically Show the Add New Person Tab when "Add" button is clicked */}
        {activeTab === 'add' && (
          <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
            <h1 className="text-xl font-bold mb-4 text-blue-500">Add New Person</h1>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={newPerson.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border border-blue-500 p-2 rounded-lg"
              />
              <input
                type="date"
                name="dob"
                value={newPerson.dob}
                onChange={handleInputChange}
                placeholder="Date of Birth"
                className="border border-blue-500 p-2 rounded-lg"
              />
              <input
                type="text"
                name="aadhar"
                value={newPerson.aadhar}
                onChange={handleInputChange}
                placeholder="Aadhar Number"
                className="border border-blue-500 p-2 rounded-lg"
              />
              <input
                type="text"
                name="mobile"
                value={newPerson.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="border border-blue-500 p-2 rounded-lg"
              />
              <input
                type="text"
                name="age"
                value={newPerson.age}
                onChange={handleInputChange}
                placeholder="Age"
                className="border border-blue-500 p-2 rounded-lg"
              />
            </div>
            <button
              className="mt-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-300 font-bold"
              onClick={handleSavePerson}
            >
              Save
            </button>

            {saveMessage && <p className="mt-2 text-green-600 font-bold">{saveMessage}</p>}

            {/* Display saved people */}
            {people.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mt-6 text-blue-500">Saved People</h3>
                <table className="w-full mt-4 border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2">Name</th>
                      <th className="p-2">Date of Birth</th>
                      <th className="p-2">Aadhar</th>
                      <th className="p-2">Mobile</th>
                      <th className="p-2">Age</th>
                      <th className="p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.map((person, index) => (
                      <tr key={index} className="text-center">
                        <td className="p-2">{person.name}</td>
                        <td className="p-2">{person.dob}</td>
                        <td className="p-2">{person.aadhar}</td>
                        <td className="p-2">{person.mobile}</td>
                        <td className="p-2">{person.age}</td>
                        <td className="p-2">
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                            onClick={() => handleDeletePerson(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Retrieve Information Tab */}
        {activeTab === 'retrieve' && (
          <div className="bg-white py-2 p-3">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Retrieve Information</h2>
            <input
              type="text"
              value={searchAadhar}
              onChange={(e) => setSearchAadhar(e.target.value)}
              placeholder="Enter Aadhar Number"
              className="border border-blue-500 p-2 rounded mb-4 w-full"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={handleSearch}
            >
              Search
            </button>

            {searchResult && (
              <div className="mt-4 p-4 border rounded bg-gray-100 shadow-lg">
                {typeof searchResult === 'string' ? (
                  <p className="text-red-600 font-bold">{searchResult}</p>
                ) : (
                  <div>
                    <h3 className="text-lg font-bold">Search Result</h3>
                    <p>Name: {searchResult.name}</p>
                    <p>Date of Birth: {searchResult.dob}</p>
                    <p>Aadhar: {searchResult.aadhar}</p>
                    <p>Mobile: {searchResult.mobile}</p>
                    <p>Age: {searchResult.age}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
