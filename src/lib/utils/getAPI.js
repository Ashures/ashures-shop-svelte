const getAPI = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (data.error) return null;
    
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAPI;