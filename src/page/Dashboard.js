import React from "react";
import ExperiencedEmp from "../components/ExperiencedEmp";
import BoxChart from "../components/LineChart";
import BarChartBox from "../components/BarChartBox";
import PieChartBox from "../components/PieChartBox";

function Dashboard({ admins, employees, managers,deps }) {
  const men = employees.filter(emp => emp.gender === 'male');
  const women = employees.filter(emp => emp.gender === 'female');
  const data = [
    { name: 'Male',color:'#0088FE', value: men?.length || 0 },
    { name: 'Women',color:'#00C49F', value: women?.length || 0 },
    
  ];
  const total=employees.length+admins.length+managers?.length
	return (
		<div className="  h-full w-full">
      <div className="container w-full">
        <div className="box box1"><ExperiencedEmp employees={ employees} /></div>
        <div className="box box2"><BoxChart title={"Admins"} totNm={admins.length} data={admins} percent={(admins.length/total).toFixed(2)} /></div>
        <div className="box box3"><BoxChart title={"Managers"} totNm={managers.length} data={managers} percent={(managers.length/total).toFixed(2)} /></div>
        <div className="box box4"><PieChartBox data={data} /></div>
        <div className="box box5"><BoxChart title={"Employees"} totNm={employees.length} data={employees} percent={(employees.length/total).toFixed(2)}  /></div>
        <div className="box box6"><BoxChart title={"Departments"} totNm={deps.length} data={employees} percent={100}  /></div>
        <div className="box box7"><BarChartBox data={employees } datKey={"age"} title={"Age"} color={"gold"} /> </div>
        <div className="box box8"><BarChartBox data={employees } datKey={"salary"}  title={"Top Payed"}  color={"#8884d8"} /></div>
      </div>
		</div>
	);
}

export default Dashboard;
