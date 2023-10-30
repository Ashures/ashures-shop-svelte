import getAPI from "$lib/utils/getAPI.js";

export const actions = {
  login: async (event) => {

  },
  register: async ({ request }) => {
    const data = await request.formData();
    let user = { "registered": true };

    data.forEach((value, key) => {
      user[key] = value;
    });
    
    console.log(await getAPI(`https://ashures-shop.onrender.com/api/users/`, {
      "method": "POST",
      "headers": { "Content-Type": "application/json" },
      "body": JSON.stringify(user),
    }));
  }
}