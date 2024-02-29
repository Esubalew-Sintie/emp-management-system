import React from "react";
import { AiOutlineMenu} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

import logo from "../asset/person-typing.svg";
import getUser from '../util/getUser'


export default function Navbar({ setToggleSideBar}) {
	
	return (
		<div className=" w-full flex z-0  justify-between  capitalize items-center h-16 shadow-lg ">
			<div className=" flex ml-4 items-center justify-center ">
				<div className=" flex justify-center  pl-3 pr-4 h-20  items-center  sm:hidden">
					<button
						className=" hover:rounded-full hover:bg-gray-300 text-black "
						onClick={() => {
							setToggleSideBar(pr=>!pr);
						}}
					>
						<AiOutlineMenu size={25} />
					</button>
				</div>
				<div className="flex">
					{" "}
					<img src={logo} alt="logo" className=" h-8 w-8 mx-4 rounded-full" />
					<h1 className=" text-xl mr-3">Employee Managment System</h1>
				</div>
				
			</div>
			
		</div>
	);
}
