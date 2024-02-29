
import { MdContactPhone,MdMoney,MdRoundaboutRight } from 'react-icons/md'
import { CiHome } from 'react-icons/ci'
import { IoIosAddCircleOutline, IoIosPerson } from 'react-icons/io'
import { FcDepartment, FcManager } from "react-icons/fc";
import { GrWorkshop } from "react-icons/gr";



export const linksAdmin = [
	{
		id: 0,
		title: "main",
		listItems: [
			{
				id: 1,
				title: "Home",
				url: "/",
				icon:<CiHome size={25} className='  text-white mr-3'/>

			},
			{
				id: 2,
				title: "Profile",
				url: "/profile",
				icon:<IoIosPerson size={25} className='  text-white mr-3'/>
			},
			{
				id: 3,
				title: "contact",
				url: "/contact",
				icon:<MdContactPhone size={25} className='  text-white mr-3'/>

			},
			{
				id: 4,
				title: "about",
				url: "/about",
				icon:<MdRoundaboutRight size={25} className='  text-white mr-3'/>

			},
		],
	},
	{
		id: 1,
		title: "managers",
		listItems: [
			{
				id: 1,
				title: "manager",
				url: "/managers",
				icon:<FcManager size={25} className='  text-white mr-3'/>

			},
			{
				id: 2,
				title: "Manager",
				url: "/add-manager",
				icon:<IoIosAddCircleOutline size={25} className='  text-white mr-3' />

			},
		],
	},
	{
		id: 2,
		title: "employees",
		listItems: [
			{
				id: 1,
				title: "Employees",
				url: "/employees",
				icon:<GrWorkshop size={25} className='  text-white mr-3'/>

			},
		],
	},
	{
		id:3 ,
		title: "department",
		listItems: [
			{
				id: 1,
				title: "Department",
				url: "/departments",
                icon:<FcDepartment size={25} className='  text-white mr-3'/>

			},
			{
				id: 2,
				title: "Department",
				url: "/add-department",
				icon:<IoIosAddCircleOutline size={25} className='  text-white mr-3'/>
			},
		],
	},
];

export const linksManager = [
	{
		id: 0,
		title: "main",
		listItems: [
			{
				id: 1,
				title: "Home",
				url: "/",
				icon:<CiHome size={25} className='  text-white mr-3'/>

			},
			{
				id: 2,
				title: "Profile",
				url: "/profile",
				icon:<IoIosPerson  size={25} className='  text-white mr-3'/>
			},
			{
				id: 3,
				title: "contact",
				url: "/contact",
				icon:<MdContactPhone size={25} className='  text-white mr-3' />

			},
			{
				id: 4,
				title: "about",
				url: "/about",
				icon:<MdRoundaboutRight size={25} className='  text-white mr-3' />

			},
		],
	},
	{
		id: 1,
		title: "employee",
		listItems: [
			{
				id: 1,
				title: "Employees",
				url: "/employees",
				icon:<GrWorkshop size={25} className='  text-white mr-3'/>
			},
			{
				id: 1,
				title: "Employees",
				url: "/add-employee",
				icon:<IoIosAddCircleOutline size={25} className='  text-white mr-3'/>
			},
		],
	},
];
export const linksEmployee = [
	{
		id: 0,
		title: "main",
		listItems: [
			{
				id: 1,
				title: "Home",
				url: "/",
				icon:<CiHome size={25} className='  text-white text-lg' />

			},
			{
				id: 2,
				title: "Profile",
				url: "/profile",
				icon:<IoIosPerson size={25} className='  text-white mr-3' />
			},
			{
				id: 3,
				title: "contact",
				url: "/contact",
				icon:<MdContactPhone  size={25} className='  text-white mr-3'/>

			},
			{
				id: 4,
				title: "about",
				url: "/about",
				icon:<MdRoundaboutRight size={24} />

			},
		],
	},
	
];
// export {linksAdmin, linksEmployee, linksManager};
