import React, { useState } from 'react'
import Swal from "sweetalert2";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { showError } from '../../util/ShowError';
function Login() {
  const navigate=useNavigate()
  const [email, setEmail]=useState('')
  const [password, setPassword] = useState('')
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  const submitHandler =async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/v1/users/login', { email, password },config,
      )
      localStorage.setItem('user', JSON.stringify(res?.data?.user))
      localStorage.setItem('token', res?.data?.refreshToken)
      navigate('/')
      return Swal.fire({
				icon: "success",
				title: "success",
				text: "Login Successfully", 
				showConfirmButton: true,
				timer: 1500,
			});
    } catch (error) {
      showError(error)
    }
    
  }
  return (
      <div className='  login text-black  w-full h-screen flex justify-center  pt-7 pb-16 px-28 max-xl:px-20  max-lg:px-16 max-md:px-10 max-sm:px-5 bg-blue-800'>
        {/* <div className=' w-full  flex  '>
              <img src={logo} alt="logo" className=' w-full'  />
          </div>          */}
      <form onSubmit={submitHandler} className=' flex flex-col pl-10 pt-20 w-1/3 max-lg:w-1/2  max-sm:w-full rounded-xl shadow-lg  bg-white'>
              <h1  className=' mb-6 font-bold text-lg'>Login  to Your Account </h1>
              <label htmlFor="email" className=' font-bold'>Email</label>
        <input className=' border-2 rounded-md mr-3 my-2 border-gray-500'
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
              <label htmlFor="password" className=' font-bold'>Password</label>
        <input className=' border-2 rounded-md mr-3 my-2 border-gray-500'
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
              <button onSubmit={submitHandler} type="submit" className=' login text-white bg-blue-600 px-3 py-1 rounded-lg  my-10 mx-4 hover:opacity-80 focus:bg-red-300 active:bg-red-500'>Login</button>
              {/* <p><button className=' hover:bg-blue-100 px-3 py-1 rounded-lg '> Forget Password</button></p> */}
          </form>    
    

    </div>
  )
}

export default Login