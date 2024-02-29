import axios from "axios";
const token =localStorage.getItem("token");
export default axios.create({
	baseURL: "http://127.0.0.1:5000/api/v1",
	withCredentials: true,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});
