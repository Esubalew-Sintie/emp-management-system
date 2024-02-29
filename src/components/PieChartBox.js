import React from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

const COLORS = ["#0088FE", "#00C49F"];
function PieChartBox({data}) {
	console.log(data);
	return (
		<div className=" w-full h-full flex flex-col justify-center">
			<h1 className=" text-xl text-wrap">Employees Data based on gender</h1>
			<div className=" w-full h-fullflex justify-start">
				<ResponsiveContainer
					width="98%"
					height={200}
					className="flex justify-start"
				>
					<PieChart>
						<Pie
							data={data}
							cx={80}
							cy={160}
							innerRadius={60}
							outerRadius={80}
							fill="#8884d8"
							paddingAngle={5}
							dataKey="value"
						>
							{data.map((item, index) => (
								<Cell key={item.name} fill={item.color} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{backgroundColor: "white", borderRadius: "5px"}}
							labelStyle={{display: "none"}}
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default PieChartBox;
