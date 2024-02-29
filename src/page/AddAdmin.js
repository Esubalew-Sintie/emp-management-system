import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

function AddAdmin({ employees, setEmployees }) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [experience, setExperience] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [roles,setRoles]=useState(["Admin","Manager","User"]);
  const textInput = useRef(null);
  const navigate=useNavigate()

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const addEmployee = async() => {
    try {
      const employee = await axios.post("http://127.0.0.1:5000/api/v1/employee/",
        {
          first_name, last_name, email, password, department, address, experience, age, salary, gender, contactNo, roles, profileImage
      }, {
        headers: {
          "Content-Type":"application/json"
        }
      })
        setEmployees(prev => [...prev, employee.data.employee])
        navigate('/')
     } catch (error) {
      console.log(error);
     }  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!first_name || !last_name || !email || !password || !department || !experience || !address || !contactNo || !age || !gender || !salary || !profileImage) {
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
      text: `${first_name} ${last_name}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className=" mx-auto p-6 bg-gray-400 rounded-md shadow-md">
      <Navbar />
          <form onSubmit={handleAdd} className="space-y-4 flex flex-col ">
        <h1 className="text-2xl font-semibold mb-4 w-full flex justify-center">First create super Admin</h1>
        <div className=' flex w-full'>
          <div className=' flex w-full justify-start '>
          <label htmlFor="firstName" className=" text-sm font-medium text-gray-600 w-20">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
              value={first_name}
              placeholder='   First Name'
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
       </div>

          <div className=' flex w-full mx-5 justify-start'>
          <label htmlFor="lastName" className=" text-sm font-medium text-gray-600 w-20">
          Last Name
        </label>
        <input
          id="lastName"
              type="text"
              placeholder='Last Name'
          name="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded-md p-2 w-full flex float-end"
        /> 
       </div>
       
        </div>
        <div className=' flex w-full '>
        <div className=' flex w-full mr-5 justify-start'>

        <label htmlFor="email" className="block text-sm w-20 font-medium text-gray-600"> Email  </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 w-full"
            />
            </div>
            <div className=' flex w-full mr-5 justify-start'>

        <label htmlFor="date" className="block text-sm font-medium text-gray-600 w-20">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2 w-full"
          />
          </div>
        </div>
        <div className=' flex w-full'>
                    
        <div className=' flex w-full mr-5'>

        <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
          Salary (ETB)
        </label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border rounded-md p-2 w-full"
          />
           </div>
          
          <div className=' flex w-full mr-5'>

        <label htmlFor="age" className="block text-sm font-medium text-gray-600">
          Age 
        </label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border rounded-md p-2 w-full"
          />
          </div>
          </div>
        <div className=' flex w-full'>
          <div className=' flex w-full justify-start '>
          <label htmlFor="address" className=" text-sm font-medium text-gray-600 w-20">
          Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
              value={address}
          
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
       </div>

          <div className=' flex w-full mx-5 justify-start'>
          <label htmlFor="Experiences" className=" text-sm font-medium text-gray-600 w-20">
         Experiences
        </label>
        <input
          id="Experiences"
              type="text"
          name="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border rounded-md p-2 w-full flex float-end"
        /> 
       </div>
       
        </div>
        <div className=' flex w-full '>
        <div className=' flex w-full mr-5 justify-start'>

        <label htmlFor="gender" className="block text-sm w-20 font-medium text-gray-600"> Gender   </label>
        <input
          id="gender"
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border rounded-md p-2 w-full"
            />
            </div>
            <div className=' flex w-full mr-5 justify-start'>

        <label htmlFor="Department" className="block text-sm font-medium text-gray-600 w-20">
          Department
        </label>
        <input
          id="Department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-md p-2 w-full"
          />
          </div>
        </div>
        <div className=' flex w-full'>
                    
        <div className=' flex w-full mr-5'>

        <label htmlFor="Contact" className="block text-sm font-medium text-gray-600">
          Contact No
        </label>
        <input
          id="Contact"
          type="tel"
          name="contactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          className="border rounded-md p-2 w-full"
          />
           </div>
          
          <div className=' flex w-full mr-5'>

        <label htmlFor="profileImage" className="block text-sm font-medium text-gray-600">
           profileImage
            </label>
        <input
          id="profileImage"
          type="text"
          name="profileImage"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
          className="border rounded-md p-2 w-full"
          />
          </div>
          </div>


        <div className=" flex space-x-2 justify-center mt-20">
          <input
            type="submit"
            value="Add"
            onClick={handleAdd}
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() =>navigate('/') }
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer"
          />
        </div>
      </form>
    </div>

  )
}

export default AddAdmin
