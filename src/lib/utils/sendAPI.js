import axios from "axios";

const sendAPI = async (url, data, header) => {
    try {
        const res = await axios.post(url, data, header);
    } catch (error) {
        console.log(error);
    }
};

export default sendAPI;