import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

export const getAllShops = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/shop/all`);

    return response.data.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
