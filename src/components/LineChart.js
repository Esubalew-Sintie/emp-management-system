import React from "react";
import {Link} from 'react-router-dom'
import { AiOutlineUsergroupAdd} from "react-icons/ai";
import {Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";

function ChartBox({ title, totNm, data, percent }) {
// 	title.lower().slice(0,title.length-1)
// title.lower().slice(0,title.length-1)
// title.lower().slice(0,title.length-1)
	const low = title.toLowerCase()
	const lower=low.slice(0,title.length)
	return (
		<div className=" flex gap-2">
			<div className="w-full flex flex-col justify-start">
				<div className=" flex">
					<AiOutlineUsergroupAdd />
					<h1 className=" ml-2 text-gray-300"> Total {title}</h1>
				</div>
				<p className=" text-xl pl-3">{ totNm}</p>
				{title =="Managers" && <Link to={`/${lower}`} className=" flex text-gray-600"> View All</Link>}
				{title =="Employees" && <Link to={`/${lower}`} className=" flex text-gray-600"> View All</Link>}
				{title =="Departments" && <Link to={`/${lower}`} className=" flex text-gray-600"> View All</Link>}
			</div>
			<div className=" w-full flex flex-col items-end ">
				<div className=" w-full h-full">
					<ResponsiveContainer width="100%" height={80}>
						<LineChart data={data}>
							<Tooltip
							contentStyle={{backgroundColor: "transparent",border:"none"}}
								labelStyle={{ display: "none" }}
								position={{x:-15,y:30}}
							/>
							<Line
								type="monotone"
								dataKey="experience"
								stroke="#8884d8"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div>{ percent}%</div>
				<div>this month</div>
			</div>
		</div>
	);
}

export default ChartBox;
