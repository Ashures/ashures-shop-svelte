import axios from "axios";

const sendAPI = async (url, data) => {
    try {
        const res = await axios.post(url, data);
    } catch (error) {
        console.log(error);
    }
        
};

export default sendAPI;