import axios from "../../api/axios";
import React, {useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { showError } from "../../util/ShowError";

function Add({employees, setEmployees,roles,title}) {
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [contactNo, setContactNo] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("male");
	const [address, setAddress] = useState("");
	const [department, setDepartment] = useState("");
	const [experience, setExperience] = useState("");
	const [profileImage, setProfileImage] = useState("");
	const [salary, setSalary] = useState("");
	const [age, setAge] = useState("");
	const textInput = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (textInput.current) {
			textInput.current.focus();
		}
	}, []);

	const addEmployee = async () => {
		try {
			const employee = await axios.post(
				"/employee/",
				{
					first_name,
					last_name,
					email,
					password,
					department,
					address,
					experience,
					age,
					salary,
					gender,
					contactNo,
					roles,
					profileImage,
				},
				
			);
			console.log(employee.data.employee);
			setEmployees((prev) => [...prev, employee.data.employee]);
			setFirstName('')
      setLastName('')
      setAge('')
      setAddress("")
      setContactNo("")
      setDepartment('')
      setEmail('')
      setExperience('')
      setGender('')
      setSalary('')
		} catch (error) {
      console.log(error);
	  showError(error)

		}
	};

	const handleAdd = (e) => {
		e.preventDefault();

		if (
			!first_name ||
			!last_name ||
			!email ||
			!password ||
			!department ||
			!experience ||
			!address ||
			!contactNo ||
			!age ||
			!gender ||
			!salary ||
			!profileImage
		) {
			return Swal.fire({
				icon: "error",
				title: "Error",
				text: "All fields are required.",
				showConfirmButton: true,
				timer: 1500,
			});
		}

		addEmployee();

		Swal.fire({
			icon: "success",
			title: "Added",
			text: `${first_name} ${last_name}'s data has been added`,
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<div className=" mx-auto p-6 form-bg rounded-md shadow-md">
			<form onSubmit={handleAdd} className="space-y-4 flex flex-col ">
				<h1 className="text-2xl font-semibold mb-4 w-full flex justify-center">
					Add {title}
				</h1>
				<div className=" flex w-full">
					<div className=" flex w-full justify-start ">
						<label
							htmlFor="firstName"
							className=" text-sm font-medium text-gray-600 w-20"
						>
							First Name
						</label>
						<input
							id="firstName"
							type="text"
							name="firstName"
							value={first_name}
							placeholder="   First Name"
							onChange={(e) => setFirstName(e.target.value)}
							className="border rounded-md p-2 w-full"
						/>
					</div>

					<div className=" flex w-full mx-5 justify-start">
						<label
							htmlFor="lastName"
							className=" text-sm font-medium text-gray-600 w-20"
						>
							Last Name
						</label>
						<input
							id="lastName"
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={last_name}
							onChange={(e) => setLastName(e.target.value)}
							className="border rounded-md p-2 w-full flex float-end"
						/>
					</div>
				</div>
				<div className=" flex w-full ">
					<div className=" flex w-full mr-5 justify-start">
						<label
							htmlFor="email"
							className="block text-sm w-20 font-medium text-gray-600"
						>
							{" "}
							Email{" "}
						</label>
						<input
							id="email"
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="border rounded-md p-2 w-full"
						/>
					</div>
					<div className=" flex w-full mr-5 justify-start">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-600 w-20"
						>
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
				<div className=" flex w-full">
					<div className=" flex w-full mr-5">
						<label
							htmlFor="salary"
							className="block text-sm font-medium text-gray-600"
						>
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

					<div className=" flex w-full mr-5">
						<label
							htmlFor="age"
							className="block text-sm font-medium text-gray-600 mr-10"
						>
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
				<div className=" flex w-full">
					<div className=" flex w-full justify-start ">
						<label
							htmlFor="address"
							className=" text-sm font-medium text-gray-600 w-20"
						>
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

					<div className=" flex w-full mx-5 justify-start">
						<label
							htmlFor="Experiences"
							className=" text-sm font-medium text-gray-600 w-20"
						>
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
				<div className=" flex w-full ">
					<div className=" flex w-full mr-5 justify-start">
						<label
							htmlFor="Gender"
							className="block text-sm w-20 font-medium text-gray-600"
						>
							{" "}
							Gender{" "}
						</label>
						<div className=" flex">
						<div className=" mr-6">
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={  (e)=> setGender(e.target.value)}
          />
          Male
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={   (e)=> setGender(e.target.value)
			}
          />
          Female
        </label>
      </div>
						</div>
					</div>
					<div className=" flex w-full mr-5 justify-start">
						<label
							htmlFor="Department"
							className="block text-sm font-medium text-gray-600 w-20"
						>
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
				<div className=" flex w-full">
					<div className=" flex w-full mr-5">
						<label
							htmlFor="Contact"
							className="block text-sm font-medium text-gray-600"
						>
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

					<div className=" flex w-full mr-5">
						<label
							htmlFor="profileImage"
							className="block text-sm font-medium text-gray-600"
						>
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
						onClick={() => navigate("/")}
						className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer"
					/>
				</div>
			</form>
		</div>
	);
}

export default Add;
