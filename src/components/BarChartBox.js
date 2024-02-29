import React from "react";
import {Bar, BarChart, ResponsiveContainer, Tooltip} from "recharts";

function BarChartBox({ data, datKey, title ,color }) {
    console.log(data);
	return (
		<div className=" w-full h-full flex flex-col ">
			<h1 className=" text-lg mb-3">{title =='Age' && 'Employees Data based on '}{title} </h1>
			<div className="w-full h-full ">
				<ResponsiveContainer width="98%" height={150}>
                    <BarChart data={data}>
                        <Tooltip
                            contentStyle={{ backgroundColor: "#3a2447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                        />
                    <Bar dataKey={datKey} fill={color} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default BarChartBox;
