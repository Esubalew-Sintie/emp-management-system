import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

function Department({employees, setEmployees}) {
	const handleDelete = async (id) => {
		Swal.fire({
			icon: "warning",
			title: "Are you sure you want to delete",
			showCancelButton: true,
			confirmButtonText: "yes, delete it",
			cancelButtonText: "No,Cancle",
		}).then((result) => {
			if (result.value) {
				axios
					.delete(`http://127.0.0.1:5000/api/v1/department/${id}`, {
						headers: {
							"Content-Type": "application/json",
						},
					})
					.then((depDeleted) => {
						console.log(id + " deleted");
						console.log(employees);
						setEmployees(employees.filter((emp) => emp._id !== depDeleted.data.dep._id));
						
					})
					.catch((err) => {
						Swal.fire({
							icon: "error",
							title: "Create Department",
							text: ` Unable to create department`,
							showConfirmButton: false,
							timer: 1500,
						});
					});

				Swal.fire({
					icon: "success",
					title: "deleted!",
					text: ` Department has been deleted successfully`,
					showConfirmButton: false,
					timer: 1500,
				});
				//  setEmployees(employees.filter(employee => employee.id !== id));
			}
		});
	};

	return (
		<div className=" w-full mt-7  max-xl:mx-2">
			<table className="w-full border-collapse">
				<thead className="table-bg  text-black">
					<tr>
						<th className="px-4 py-2 text-center">Department</th>
						<th className="px-4 py-2 text-center">Description</th>
						<th className="px-4 py-2 col-span-2 text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{employees?.length > 0 ? (
						employees?.map((employee, i) => (
							<tr
								key={employee?._id}
								className='table-bg'
							>
								<td className="border px-4 py-2 text-center">
									{employee.department}
								</td>
								<td className="border px-4 py-2 text-center">
									{employee.desc}{" "}
								</td>
								<td className="border px-4 py-2 text-center">
									<Link
										to={`/department/edit/${employee._id}`}
										className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
									>
										Edit
									</Link>
									<button
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
										onClick={() => handleDelete(employee._id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))
					) : (
						<div className=" flex justify-center items-center h-96">
								No Department
							
						</div>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Department;
