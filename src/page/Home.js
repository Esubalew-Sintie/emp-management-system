import {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import SideBar from "../components/Sidebar";

import getUser from "../util/getUser";

import Feed from "./Feed";

const Home = ({
	employees,
	setEmployees,
	admins,
	managers,
	setManagers,
	toggleSideBar,
	setShowSetting,
	setToggleSideBar,
}) => {
	const navigate = useNavigate();

	const user = getUser();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	return (
		<div className=" flex w-full ">
			<div className="flex   max-sm:hidden  h-screen w-60   ">
				<SideBar />
			</div>
			<div className="max-xl:flex-col flex mt-5 ">
				{toggleSideBar && (
					<div
						onClick={() => setShowSetting(false)}
						className="  absolute top-0 bottom-0 left-0 bg-black  sm:hidden z-10  pr-4"
					>
						<SideBar
							toggleSidbar={setToggleSideBar}
							setShowSetting={setShowSetting}
						/>
					</div>
				)}
			</div>
			<div className=" w-full  ml-2 ">
				<Routes>
					<Route
						path="/*"
						element={
							<Feed
								employees={employees}
								setEmployees={setEmployees}
								admins={admins}
								setShowSetting={setShowSetting}
								managers={managers}
								setManagers={setManagers}
								setToggleSideBar={setToggleSideBar}
								toggleSideBar={toggleSideBar}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default Home;
