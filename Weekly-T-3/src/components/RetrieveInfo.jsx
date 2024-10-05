import { useState } from "react";

function RetrieveInfo() {
  const [aadhar, setAadhar] = useState("");
  const [personInfo, setPersonInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRetrieve = () => {
    const persons = JSON.parse(localStorage.getItem("persons"));
    const person = persons ? persons.find((p) => p.aadhar === aadhar) : null;
    if (person) {
      setPersonInfo(person);
      setErrorMessage("");
    } else {
      setPersonInfo(null);
      setErrorMessage("No match found");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Enter Aadhar Number" 
          value={aadhar} 
          onChange={(e) => setAadhar(e.target.value)} 
          className="border p-2"
        />
        <button onClick={handleRetrieve} className="ml-4 bg-blue-500 text-white px-4 py-2">
          Retrieve
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {personInfo && (
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Aadhar Number</th>
              <th className="border px-4 py-2">Mobile Number</th>
              <th className="border px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{personInfo.name}</td>
              <td className="border px-4 py-2">{personInfo.dob}</td>
              <td className="border px-4 py-2">{personInfo.aadhar}</td>
              <td className="border px-4 py-2">{personInfo.mobile}</td>
              <td className="border px-4 py-2">{personInfo.age}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
  }
  
export default RetrieveInfo;
