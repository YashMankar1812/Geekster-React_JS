import React, { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  // Load tasks from localStorage when the app loads
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task with alert message
  const addTask = () => {
    if (task.trim() === '') {
      showAlert(true, 'Please provide a value!', 'danger');
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
      showAlert(true, 'Task added to the list!', 'success');
      setTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearCompleted = () => {
    const newTasks = tasks.filter((t) => !t.completed); // Keep only uncompleted tasks
    
    // If there are no uncompleted tasks left, clear the entire list
    if (newTasks.length === 0) {
      showAlert(true, 'All tasks cleared!', 'success');
    } else if (newTasks.length === tasks.length) {
      showAlert(true, 'No completed tasks to clear!', 'danger');
    } else {
      showAlert(true, 'Completed tasks cleared!', 'success');
    }
  
    setTasks(newTasks); // Update tasks with the new filtered list
  };
  
  
  // Show alert
  const showAlert = (show = false, message = '', type = '') => {
    setAlert({ show, message, type });
    if (show) {
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 3000); // Hide alert after 1 second
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className=" rounded  p-6">
        <h1 className="animate__animated animate__backInDown text-3xl font-extrabold tracking-wider text-center mb-6 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-md">
          Local Tasker
        </h1>

        {/* Alert Message */}
        {alert.show && (
          <div
            className={`p-2 mb-4 text-center text-white ${
              alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } rounded flex justify-between  w-50 float-right`}
          >
            {alert.message}
            <button
              onClick={() => setAlert({ show: false, message: '', type: '' })}
              className="ml-2 font-bold"
            >
              &times;
            </button>
          </div>
        )}

        <div className="flex mb-4 justify-center">
          <input
            type="text"
            className="animate__animated animate__fadeInDown animate__delay-2s border align-center p-3 w-80 rounded-lg bg-gray-100 text-pink-700 font-bold focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
          />
          <button
            className="animate__animated animate__fadeInDown animate__delay-2s bg-gradient-to-r from-green-800 via-green-900 to-green-500
            text-white p-3 ml-2 rounded-lg shadow-md transition-all duration-300"
            onClick={addTask}
          >
            ADD
          </button>
        </div>

        {/* Conditionally render the task list only if there are tasks */}
        {tasks.length > 0 && (
          <ul className="list-disc pl-6 space-y-3">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-md hover:bg-gray-100"
              >
                <span
                  className={`cursor-pointer ${
                    t.completed ? 'line-through text-gray-500 font-bold' : ''
                  }`}
                  onClick={() => toggleTask(index)}
                >
                  {t.text}
                </span>
                <button
                  className="text-red-500 font-bold bg-transparent hover:bg-red-500 hover:text-white border border-red-500 hover:border-transparent p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Clear Completed Button */}
        {tasks.length > 0 && (
          <div className="mt-6">
            {/* <button
              className="bg-purple-400 hover:bg-red-600 text-white p-3 w-full  rounded-lg shadow-md transition-all duration-300"
              onClick={clearCompleted}
            >
              Clear Completed
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

