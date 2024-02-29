import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { showError } from '../util/ShowError';

function EditDepartment({ deps,setDep }) {
    const {id}=useParams()
    // const [dep, setDepart] = useState(null);
  const dep = deps?.find(dep => dep._id === id);
  const [department, setDepartment] = useState(dep?.department);
  const [desc, setDesc] = useState(dep?.desc);
  console.log(department,desc);
  const textInput = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const editEmployee = async () => {
   try {
    const employee = await axios.put(`http://127.0.0.1:5000/api/v1/department/${id}`,
    { department, desc }, {
      headers: {
        "Content-Type":"application/json"
      }
    })
     console.log(employee.data.dep);
     const existdep=deps?.filter(dep => dep._id !== employee.data.dep._id);

     setDep([...existdep, employee.data.dep])
     setDesc('')
     setDepartment('')
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

  

    editEmployee();


    Swal.fire({
      icon: 'success',
      title: 'Edited',
      text: `${department} ${desc}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 text-black focus:outline-none bg-gray-400 rounded-md shadow-xl">
      <form onSubmit={handleAdd} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Add Department</h1>
        <label htmlFor="department" className="block text-sm font-medium text-gray-600">
          Department
        </label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="desc" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <input
          id="desc"
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Edit"
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

export default EditDepartment
