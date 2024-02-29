const axios= require("../api/axios");


const useRefresh = () => {
  const refresh = async () => {
    try {
      const response = await axios.get('/refresh', {
          withCredentials: true,
          credentials: 'include',

      });
        console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle error
    }
  };

  return refresh;
};

export default useRefresh;
