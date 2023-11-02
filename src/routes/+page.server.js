import getAPI from "$lib/utils/getAPI.js";
import sendAPI from '$lib/utils/sendAPI.js'
import { send } from "vite";

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    let user = {};

    data.forEach((value, key) => {
      user[key] = value;
    });
  },
  register: async ({ request }) => {
    const data = await request.formData();
    let user = {};

    data.forEach((value, key) => {
      user[key] = value;
    });
    
    await sendAPI(`https://ashures-shop.onrender.com/api/users/`, user);
  }
}