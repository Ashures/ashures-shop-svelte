import getAPI from '$lib/utils/api/getAPI.js';
import sendAPI from '$lib/utils/api/sendAPI.js';
import formDataToJson from '$lib/utils/formDataToJson.js';

export const actions = {
  login: async ({ request }) => {
    const user = await formDataToJson(request);

    const data = await getAPI(`http://localhost:3000/api/users/${user.username}`);

    console.log(data);
  },
  register: async ({ request }) => {
    const user = await formDataToJson(request);
    
    await sendAPI(`https://ashures-shop.onrender.com/api/users/`, user);
  }
}