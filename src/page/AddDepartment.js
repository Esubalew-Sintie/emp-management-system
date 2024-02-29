import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { showError } from '../util/ShowError';

function AddDepartment({  setDep }) {
  const [department, setDepartment] = useState('');
  const [desc, setDesc] = useState('');
  const textInput = useRef(null);
  const navigate=useNavigate()

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const addEmployee = async () => {
   try {
    const employee = await axios.post("http://127.0.0.1:5000/api/v1/department/",
    { department, desc }, {
      headers: {
        "Content-Type":"application/json"
      }
    })
     console.log(employee.data.dep);
     setDep(prev => [...prev, employee.data.dep])
     setDepartment('')
						setDesc('')
   } catch (error) {
    showError(error)
  }
    // setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!department || !desc ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required.',
        showConfirmButton: true,
        timer: 1500,
      });
    }

  

    addEmployee();


    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${department} ${desc}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 form-bg mt-4 rounded-md shadow-xl">
      <form onSubmit={handleAdd} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Add Department</h1>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
          Department
        </label>
        <input
          id="firstName"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <input
          id="lastName"
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Add"
            onClick={handleAdd}
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => navigate('/')}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover: hover:bg-gray-100 cursor-pointer"
          />
        </div>
      </form>
    </div>

  )
}

export default AddDepartment
