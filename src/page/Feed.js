import React from "react";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";

import Dashboard from "./Dashboard";
import List from "./Dashboard/List";
import Edit from "./Dashboard/Edit";
import Add from "./Dashboard/Add";
import Department from "./Department";
import AddDepartment from "./AddDepartment";
import axios from "../api/axios";
import EditDepartment from "./EditDepartment";
import getUser from "../util/getUser";
import About from "./About";
import Contact from "./Contact";
import ProfilePage from "./Profile";
import {showError} from "../util/ShowError";
function Feed({
	employees,
	setEmployees,
	admins,
	managers,
	setManagers,
	toggleSideBar,
	setShowSetting,
	setToggleSideBar,
}) {
	const [deps, setDep] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const deps = await axios.get("/department/");
				setDep(deps.data.deps);
			} catch (error) {
				// showError(error);
				console.log(error);

			}
		};
		fetchData();
	}, []);

	const user = getUser();
	const [roles, setRoles] = useState(["Manager", "User"]);
	const [userRole, setUserRole] = useState([ "User"]);

	return (
		<div className=" w-full    " >
			<Navbar
				setToggleSideBar={setToggleSideBar}
			/>
			<div className="w-full" onClick={() => setToggleSideBar(false)}>
				<Routes>
					{
						<>
							<Route
								path="/"
								element={
									<Dashboard
										admins={admins}
										deps={deps}
										managers={managers}
										employees={employees}
									/>
								}
							/>
							<Route
								path="/employees/edit/:id"
								element={
									<Edit
										employees={employees}
										title={"Employees"}
										setEmployees={setEmployees}
									/>
								}
							/>
							<Route path="/profile" element={<ProfilePage user={user} />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/about" element={<About />} />

							{user?.roles?.includes("Admin") ? (
								<>
									<Route
										path="/managers"
										element={
											<List
												employees={managers}
												title={"managers"}
												setEmployees={setManagers}
											/>
										}
                  />
                  <Route
								path="/managers/edit/:id"
								element={
									<Edit
										employees={managers}
										title={"Managers"}
										setEmployees={setManagers}
									/>
								}
							/>
									<Route
										path="/departments"
										element={
											<Department employees={deps} setEmployees={setDep} />
										}
									/>
									<Route
										path="/add-manager"
										element={
											<Add
												employees={managers}
												setEmployees={setManagers}
												roles={roles}
												title={"Manager"}
											/>
										}
									/>
									<Route
										path="/add-department"
										element={<AddDepartment setDep={setDep} />}
									/>
									<Route
										path="/department/edit/:id"
										element={<EditDepartment deps={deps} setDep={setDep} />}
									/>
									<Route
										path="/employees"
										element={
											<List
												employees={employees}
												title={"Employees"}
												setEmployees={setEmployees}
											/>
										}
									/>
									<Route
										path="/add-employee"
										element={
											<Add
												setEmployees={setEmployees}
												title={"Employee"}
												employees={employees}
												roles={userRole}
											/>
										}
									/>
								</>
							) : (
								<>
									{user?.roles?.includes("Manager") ? (
										<>
											<Route
												path="/add-employee"
												element={
													<Add
														setEmployees={setEmployees}
														title={"Employee"}
														employees={employees}
														roles={userRole}
													/>
												}
											/>
											<Route
												path="/employees"
												element={
													<List
														employees={employees}
														title={"Employees"}
														setEmployees={setEmployees}
													/>
												}
											/>
										</>
									) : (
										<Route
											path="/login"
											element={
												<div>
													<button className="bg-blue-500 px-3 py-1 rounded-md">
														Login
													</button>
												</div>
											}
										/>
									)}
								</>
							)}
						</>
					}
					<Route
						path="*"
						element={
							<div className=" w-full flex  h-96 justify-center items-center flex-col">
								<h1>Page not Found</h1>
								<Link
									to="/"
									className="h-10 bg-red-300 px-3 py-1 rounded-md mt-7"
								>
									Back to Home
								</Link>
							</div>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default Feed;
