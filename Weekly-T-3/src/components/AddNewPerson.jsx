import { useState } from "react";

function AddNewPerson() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([...rows, { name: "", dob: "", aadhar: "", mobile: "", age: "" }]);
  };

  const handleSave = (index) => {
    const person = rows[index];
    if (person.name && person.dob && person.aadhar.length === 12 && person.mobile.length === 10) {
      let age = calculateAge(person.dob);
      let updatedPerson = { ...person, age: age };
      rows[index] = updatedPerson;
      setRows([...rows]);
      localStorage.setItem("persons", JSON.stringify(rows));
    } else {
      alert("Please ensure all fields are valid.");
    }
  };

  const calculateAge = (dob) => {
    let birthDate = new Date(dob);
    let diff = Date.now() - birthDate.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleDelete = (index) => {
    const person = rows[index];
    if (localStorage.getItem("persons")) {
      let persons = JSON.parse(localStorage.getItem("persons"));
      persons = persons.filter((p) => p.aadhar !== person.aadhar);
      localStorage.setItem("persons", JSON.stringify(persons));
    }
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Date of Birth</th>
            <th className="border px-4 py-2">Aadhar Number</th>
            <th className="border px-4 py-2">Mobile Number</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                <input 
                  type="text" 
                  value={row.name} 
                  onChange={(e) => handleChange(index, "name", e.target.value)} 
                  className="border p-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input 
                  type="date" 
                  value={row.dob} 
                  onChange={(e) => handleChange(index, "dob", e.target.value)} 
                  className="border p-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input 
                  type="text" 
                  value={row.aadhar} 
                  onChange={(e) => handleChange(index, "aadhar", e.target.value)} 
                  className="border p-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input 
                  type="text" 
                  value={row.mobile} 
                  onChange={(e) => handleChange(index, "mobile", e.target.value)} 
                  className="border p-1"
                />
              </td>
              <td className="border px-4 py-2">{row.age}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleSave(index)} className="bg-green-500 text-white px-2 py-1 mx-1">
                  Save
                </button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 mx-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="mt-4 bg-blue-500 text-white px-4 py-2">
        Add New Row
      </button>
    </div>
  );
}

export default AddNewPerson;
