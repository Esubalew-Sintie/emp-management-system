import { AiFillCloseCircle, AiFillHome, AiFillPlusSquare } from "react-icons/ai"

import {linksAdmin,linksManager,linksEmployee} from "../util/constants";
import logo from "../asset/person-typing.svg";
import getUser from '../util/getUser'
import { NavLink, useNavigate } from "react-router-dom";
const activeStyle = " flex font-bold mx-2 bg-blue-600 px-1  rounded-md capitalize";
const nonActiveStyle = " flex mx-1 text-white capitalize ";


const Sidebar = ({ toggleSidbar }) => {
  const navigate=useNavigate()

  const user = getUser()

  return (
    <div className="  flex flex-col h-screen w-52 max-md:w-48 bod fixed top-0 bottom-0 pl-2 overflow-auto z-10  bg-[#2a3447] ">
      {/* <img src={Logo} alt="logo" className=" my-5 h-8   " /> */}
      <button type="button" className=" sm:hidden" onClick={() => toggleSidbar(false)}>
        <AiFillCloseCircle size={25} className=" absolute top-2 right-2" />
      </button>
      <h1  onClick={()=> toggleSidbar && toggleSidbar(false)} className=' mt-10 text-xl'>
         Dashboard
      </h1>
      {
					user?.roles?.includes("Admin") ? linksAdmin.map((link) => (
            <div className=" mt-3">
            <span className="softCol uppercase"> { link.title}</span>
            {
              link.listItems.map((item) => (
                <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
            to={`${item.url}`}
                  key={link.id}
                  onClick={() => {toggleSidbar && toggleSidbar(false)}}
          >
                  {/* <span><AiFillHome /></span> */}
                  <p className="ml-3 flex my-2 items-center"> <span className="  mr-3 w-6">{ item.icon}</span> {item.title}</p>
          </NavLink>
              ))
          }
          </div>
					)) :
						user?.roles?.includes("Manager") ? linksManager.map((link) => (
						  <div className=" mt-7">
              <span className="softCol uppercase"> { link.title}</span>
              {
                link.listItems.map((item) => (
                  <NavLink
							className={({ isActive }) =>
								isActive ? activeStyle : nonActiveStyle
							}
                    to={`${item.url}`}
                    onClick={() => {toggleSidbar && toggleSidbar(false)}}
                    key={link.id}
						>
                    {/* <span><AiFillHome /></span> */}
                    <p className="ml-3 flex my-2 items-center"> <span className="  mr-3 w-6">{ item.icon}</span> {item.title}</p>
						</NavLink>
                ))
            }
            </div>
						)) : user?.roles?.includes("User") &&	linksEmployee.map((link) => (
              <div className=" mt-7">
              <span className="softCol uppercase"> { link.title}</span>
              {
                link.listItems.map((item) => (
                  <NavLink
							className={({ isActive }) =>
								isActive ? activeStyle : nonActiveStyle
							}
                    to={`${item.url}`}
                    onClick={() => {toggleSidbar && toggleSidbar(false)}}
                    key={link.id}
						>
                    {/* <span><AiFillHome /></span> */}
                    <p className="ml-3 flex my-2 items-center"> <span className="  mr-3 w-6">{ item.icon}</span> {item.title}</p>
						</NavLink>
                ))
            }
            </div>
						))
				
						}
     <div className=" flex  mr-12   ">
			
      <button onClick={() => {
        localStorage.clear()
        navigate('/login')
      }} className=" bg-red-500 ml-4 px-3 py-1 rounded-md">Log Out</button>
    </div>
    </div>
  )
}

export default Sidebar