import sendAPI from '$lib/utils/api/sendAPI.js';
import formDataToJson from '$lib/utils/formDataToJson.js';

export const actions = {
  login: async ({ request }) => {
    const user = await formDataToJson(request);

    console.log(user);
  },
  register: async ({ request }) => {
    const user = await formDataToJson(request);
    
    await sendAPI(`https://ashures-shop.onrender.com/api/users/`, user);
  }
}