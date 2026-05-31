import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [phone , setPhone] = useState("");
  const [studentOf , setStudentOf] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(selectedStudent,'==this is selected');
    console.log(name,phone,studentOf);
    const user = { name,class:studentOf,phone };
    const sentUser = axios.post('http://localhost:5000',user)
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Class
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Class"
            value={studentOf}
            onChange={(e) => setStudentOf(e.target.value)}
          />
          {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Class"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
