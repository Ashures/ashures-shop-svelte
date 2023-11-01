import axios from "axios";

const getAPI = async (url) => {
  try {
    const res = await axios.get(url);
    const data = await res.data;

    if (data.error) return null;
    
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAPI;