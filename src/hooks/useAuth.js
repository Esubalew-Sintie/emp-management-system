const { default: axios } = require("../api/axios");

const useAuth = () => {
    const refresh = () => {
        const res = axios.get('/refresh', {
            "content-type": "application/json",
              withCredentials:true
        })
        return res.data
    }
    return refresh
}