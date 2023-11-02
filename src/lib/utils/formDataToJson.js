const formDataToJson = async (request) => {
  const data = await request.formData();
  let obj = {};

  data.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};

export default formDataToJson;