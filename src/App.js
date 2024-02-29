import React, {useEffect, useState} from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
	useNavigate,
} from "react-router-dom";
import axios from "./api/axios";

import Home from "./page/Home";
import Login from "./page/auth/Login";

import Add from "./page/Dashboard/Add";
import useRefresh from "./api/refresh";
import {showError} from "./util/ShowError";
import getUser from "./util/getUser";

function App() {
	const [employees, setEmployees] = useState([]);
	const [admins, setAdmins] = useState([]);
	const [managers, setManagers] = useState([]);
	const [toggleSideBar, setToggleSideBar] = useState(false);
	const user = getUser();

	const refresh = useRefresh();

	const navigate = useNavigate();
	useEffect(() => {
		const fetchRefrsh = async () => {
			const res = await refresh();
			console.log(res);
		};
		fetchRefrsh();
	}, []);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("/employee/");
				setEmployees(res.data.employees);
				console.log(employees);
			} catch (error) {
				// showError(error);
				console.log(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("/users/admin");
				setAdmins(res.data);
			} catch (error) {
				// showError(error);
				console.log(error);
			}
		};
		fetchData();
	}, []);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("/users/manager");
				setManagers(res.data);
				console.log(res);
				// if (admins.length>0) {
				// 	navigate("/" )
				// }
			} catch (error) {
				// showError(error);
				console.log(error);
			}
		};
		fetchData();
	}, []);
	// const [employees,setEmployees] = useFetchData("http://127.0.0.1:5000/api/v1/users/").users;
	// console.log(employees);
	const [showSetting, setShowSetting] = useState(false);
	const [roles, setRoles] = useState(["Admin", "Manager", "User"]);
	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, []);
	return (
		<>
			<div>
				<Routes>
					{admins?.length > 0 ? (
						<>
							<Route path="/login" element={<Login />} />
							<Route
								path="/*"
								element={
									<Home
										employees={employees}
										setEmployees={setEmployees}
										admins={admins}
										setShowSetting={setShowSetting}
										showSetting={showSetting}
										managers={managers}
										setManagers={setManagers}
										setToggleSideBar={setToggleSideBar}
										toggleSideBar={toggleSideBar}
									/>
								}
							/>
						</>
					) : (
						<>
							{" "}
							<Route
								path="/add-admin"
								element={
									<Add
										employees={employees}
										setEmployees={setEmployees}
										roles={roles}
										title={"Admins"}
									/>
								}
							/>
							{/* {
									!admins?.length>0 &&	<Route
									path="*"
									element={<Navigate to="/add-admin"  />}
								/>} */}
						</>
					)}
				</Routes>
			</div>
		</>
	);
}

export default App;
