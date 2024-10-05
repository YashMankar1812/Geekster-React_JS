import { useState } from "react";
import AddNewPerson from "./components/AddNewPerson";
import RetrieveInfo from "./components/RetrieveInfo";

function App() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-center mb-6">
        <button 
          onClick={() => setActiveTab("add")}
          className={`px-4 py-2 mx-2 ${activeTab === 'add' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>
          Add New Person
        </button>
        <button 
          onClick={() => setActiveTab("retrieve")}
          className={`px-4 py-2 mx-2 ${activeTab === 'retrieve' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>
          Retrieve Information
        </button>
      </div>
      <div>
        {activeTab === "add" ? <AddNewPerson /> : <RetrieveInfo />}
      </div>
    </div>
  );
}

export default App;
