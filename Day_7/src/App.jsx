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

  // Clear completed tasks
  const clearCompleted = () => {
    const newTasks = tasks.filter((t) => !t.completed);
    setTasks(newTasks);
  };

  // Show alert
  const showAlert = (show = false, message = '', type = '') => {
    setAlert({ show, message, type });
    if (show) {
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 1000); // Hide alert after 1 second
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-4">LocalTasker</h1>

        {/* Alert Message */}
        {alert.show && (
          <div
            className={`p-2 mb-4 text-center text-white ${
              alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } rounded flex justify-between`}
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

        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 w-full"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
          />
          <button
            className="bg-blue-500 text-white p-2 ml-2 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <ul className="list-disc pl-6">
          {tasks.map((t, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span
                className={`cursor-pointer ${t.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleTask(index)}
              >
                {t.text}
              </span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            className="bg-red-500 text-white p-2 rounded w-full"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
