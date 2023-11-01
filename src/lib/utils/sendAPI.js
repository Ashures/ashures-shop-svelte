import axios from "axios";

const sendAPI = async (url, data) => {
    try {
        const res = await axios.post(url, data);

        console.log(res);
    } catch (error) {
        console.log(error);
    }
        
};

export default sendAPI;