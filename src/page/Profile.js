import React, {useState} from "react";

import profile from "../asset/user.png";
import getUser from "../util/getUser";
import ProfileEdit from "./ProfileEdit";
import Swal from "sweetalert2";
import axios from "../api/axios";

const Profile = () => {
	const selectedemployee = getUser();
	const [employee, setEmployee] = useState(selectedemployee);
	const [editMode, setEditMode] = useState(false);

	const handleEdit = () => {
		setEditMode(true);
	};
	const editEmployee = async () => {
		// console.log(employee);
		try {
			const employee = await axios.put(
				`/users/update-profile/${employee._id}`,
				{
					...employee,
				}
			);
			localStorage.setItem("user", JSON.stringify(employee.data.employee));
			setEmployee(employee.data.employee);

		} catch (error) {
			console.log(error);
			return Swal.fire({
				icon: "error",
				title: "Error",
				text: "All fields are required.",
				showConfirmButton: true,
				timer: 1500,
			});
		}
	};
	const handleSave = () => {
		const handleAdd = (e) => {
			e.preventDefault();

			if (
				!first_name ||
				!last_name ||
				!email ||
				!department ||
				!experience ||
				!address ||
				!contactNo ||
				!age ||
				!gender ||
				!salary
			) {
				return Swal.fire({
					icon: "error",
					title: "Error",
					text: "All fields are required.",
					showConfirmButton: true,
					timer: 1500,
				});
			}

			editEmployee();
			Swal.fire({
				icon: "success",
				title: "Added",
				text: `${first_name} ${last_name}'s data has been added`,
				showConfirmButton: false,
				timer: 1500,
			});
		};
		setEditMode(false);
		// Perform save logic here
	};

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setEmployee((prevEmployee) => ({
			...prevEmployee,
			[name]: value,
		}));
	};

	return (
		<div className=" bg-white h-full shadow-md w-full flex justify-center text-black mt-1">
			<ProfileEdit
				employee={employee}
				editMode={editMode}
				onEdit={handleEdit}
				onSave={handleSave}
				onInputChange={handleInputChange}
			/>
		</div>
	);
};

export default Profile;
