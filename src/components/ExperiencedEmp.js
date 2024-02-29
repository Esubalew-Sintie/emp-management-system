import React from 'react'
import user from '../asset/user.png'

function ExperiencedEmp({ employees }) {
    employees
    .sort((a, b) => parseInt(b.experience, 10) - parseInt(a.experience, 10))
    .slice(0,3);
    console.log(employees);

// console.log(expEmp);
  return (
      <div>
          <h1 className=' mt-3 mb-5'>experienced employee</h1>
          {
              employees.slice(0,3).map((emp,indx) => (
                <div key={indx} className=' flex justify-between items-center mb-3 text-gray-300'>
                <div className=' flex'>
                <img src={user} alt="" className=' w-7 h-7 rounded-full '  />
                          <div className='  ml-2 '>
                          <p>{emp.first_name} { emp.last_name}</p>
                    <p className=''>{emp.email.slice(0,7)}...</p>
                        </div>
                </div>
                <div className=' text-gray-50'>
                    {emp.experience} Year
                </div>
            </div>
              ))
          }
    </div>
  )
}

export default ExperiencedEmp