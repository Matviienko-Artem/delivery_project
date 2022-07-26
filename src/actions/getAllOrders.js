import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/order/all`);
    alert(response.data.message);
    return response;
  } catch (error) {
    alert(error.response.data.message);
  }
};
