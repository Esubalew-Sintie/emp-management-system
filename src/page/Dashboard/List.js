import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";
import { showError } from '../../util/ShowError';
import getUser from '../../util/getUser';

function List({ employees,setEmployees,title}) {
  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'ETB',
    minimumFractionDigits: null,
  });
  // let emp
  // if(title==="Managers"){

  //  emp=allEmp.filter(em=>em.roles.includes(title.slice(0,title.length-1)))
  // }
  // else(
  //   emp=allEmp
  // )
  
  // const [employees, setEmployee] = useState(emp)
  
  
 
   const handleDelete = (id,roles) => {
     Swal.fire({
       icon: 'warning',
       title: 'Are you sure you want to delete',
       showCancelButton: true,
       confirmButtonText: 'yes, delete it',
       cancelButtonText: 'No,Cancle',
 
     }).then(result => {
       if (result.value) {
         if (getUser()._id !== id && !roles.includes("Admin") ) {
          axios
        .delete(`http://127.0.0.1:5000/api/v1/employee/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((depDeleted) => {
          setEmployees(employees.filter((emp) => emp._id !== depDeleted.data.employee._id));
        })
          .catch((err) => {
          showError(err)
        });
        //  const [employee] = employees.filter(employee => employee.id === id);
         Swal.fire({
           icon: 'success',
           title: 'deleted!',
           text:` data has been deleted`,
           showConfirmButton: false,
           timer: 1500
         });
         setEmployees(employees.filter(employee => employee.id !== id));
        }
       }
       else {
        Swal.fire({
          icon: 'error',
          title: 'Un able to delete!',
          text:` you can't delet`,
          showConfirmButton: false,
          timer: 1500
        });
       }
     });
   }

  return (
    
    <div className=" px-2 w-full mt-10 max-xl:text-sm max-xl:font-thin">
      <div className=' flex my-5  ml-8'>
      <h1 className=' font-bold text-lg'>{title}</h1>
      <Link to={`/add-${title.slice(0,title.length-1)}`} className=' ml-5 bg-white text-black px-3 py-1 rounded-md'>Add {title}</Link>
     </div>
      <table className=" w-full border-collapse overflow-auto">
        <thead className="table-bg   text-black">
          <tr className=' text-black'>
            <th className="px-1 py-2 text-center">id</th>
            <th className="px-1 py-2 text-center">Full Name</th>
            <th className="px-1 py-2 text-center">Gender</th>
            <th className="px-1 py-2 text-center">Department</th>
            <th className="px-1 py-2 text-center break-words">Salary</th>
            <th className="px-1 py-2 text-center max-sm:hidden">Experience</th>
            <th className="px-1 py-2 col-span-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.length > 0 ? (
            employees?.map((employee, i) => (
              <tr key={`employee?._id-${i}`} className=' table-bg'>
                <td className="border px-1 py-2 text-center">{i + 1}</td>
                <td className="border px-1 py-2 text-center">{employee?.first_name} {employee?.last_name}</td>
                {/* <td className="border px-4 py-2 text-center"></td> */}
                <td className="border px-1 py-2 text-center">{employee.gender}</td>
                <td className="border px-1 py-2 text-center">{employee.department}</td>
                <td className="border px-1 py-2 text-center text-wrap">{formatter.format(employee?.salary)}</td>
                <td className="border px-1 py-2 text-center max-sm:hidden">{employee?.experience}</td>
                <td className="border px-1 py-2 text-center">
                  <Link
                  // to={`/add-${title.slice(0,title.length-1)}`}

                    to={`/${title.toLowerCase()}/edit/${employee._id}`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDelete(employee._id,employee.roles)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div className=" flex justify-center items-center h-96">
								No Employees
							
						</div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
