import React from "react";
import getUser from "../util/getUser";
import pro from "../asset/user.png";

const ProfileEdit = ({employee, editMode, onEdit, onSave, onInputChange}) => {
	const handleInputChange = (e) => {
		onInputChange(e);
	};

	const handleSave = () => {
		onSave();
	};

	return (
		<div className=" flex  border-2 border-gray-300 rounded-lg my-1 px-16   flex-col  h-full m-auto  justify-center items-start text-black  gap-4">
			<img
				src={pro}
				alt={employee.first_name}
				className=" w-28  rounded-full "
			/>
			<p className="  ">
				First Name:{" "}
				{editMode ? (
					<input
						type="text"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="first_name"
						value={employee.first_name}
						onChange={handleInputChange}
					/>
				) : (
					employee.first_name
				)}{" "}
			</p>
			<p>
				Last Name:{" "}
				{editMode ? (
					<input
						type="text"
						className="  ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="last_name"
						value={employee.last_name}
						onChange={handleInputChange}
					/>
				) : (
					employee.last_name
				)}
			</p>
			<p>
				Email:{" "}
				{editMode ? (
					<input
						type="text"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="email"
						value={employee.email}
						onChange={handleInputChange}
					/>
				) : (
					employee.email
				)}
			</p>
			<p>
				Experience:{" "}
				{editMode ? (
					<input
						type="experience"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="experience"
						value={employee.experience}
						onChange={handleInputChange}
					/>
				) : (
					employee.experience
				)}
			</p>
			<p>
				Department:{" "}
				{editMode ? (
					<input
						type="text"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="department"
						value={employee.department}
						onChange={handleInputChange}
					/>
				) : (
					employee.department
				)}
			</p>
			<p>
				Address:{" "}
				{editMode ? (
					<input
						type="text"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="address"
						value={employee.address}
						onChange={handleInputChange}
					/>
				) : (
					employee.address
				)}
			</p>
			<p>
				Age:{" "}
				{editMode ? (
					<input
						type="number"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="age"
						value={employee.age}
						onChange={handleInputChange}
					/>
				) : (
					employee.age
				)}
			</p>
			<p>Salary: {employee.salary}</p>
			<p>
				Contact No:{" "}
				{editMode ? (
					<input
						type="text"
						className=" ml-5 bg-blue-400 text-black rounded-lg pl-3 focus:outline-none"
						name="contactNo"
						value={employee.contactNo}
						onChange={handleInputChange}
					/>
				) : (
					employee.contactNo
				)}
			</p>
			{editMode ? (
				<button
					className=" bg-blue-600 px-3 py-1 rounded-md mb-3"
					onClick={handleSave}
				>
					Save
				</button>
			) : (
				<button
					className=" bg-blue-600 px-3 py-1 rounded-md mb-3"
					onClick={onEdit}
				>
					Edit
				</button>
			)}
		</div>
	);
};

export default ProfileEdit;
