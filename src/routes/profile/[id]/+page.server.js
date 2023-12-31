import getAPI from "$lib/utils/api/getAPI.js";

const filterUserData = (userData) => {
  const bannedKeys = ["id", "password", "token", "registered", "createdAt", "updatedAt"];
  
  let filteredData = {};
  Object.entries(userData.data).forEach(entry => {
    const [key, value] = entry;

    if (bannedKeys.includes(key)) return;

    filteredData[key] = value;
  });

  return filteredData;
};

export async function load({ params }) {
  const pageId = params.id;
  const BASE_URL = "https://ashures-shop.onrender.com/api";

  const data = await getAPI(`${BASE_URL}/users/${pageId}`);

  if (!data) return;
  
  let results = filterUserData(data);

  return { results };
}