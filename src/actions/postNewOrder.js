import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

export const postNewOrder = async (cart) => {
  try {
    const response = await axios.post(`${baseUrl}/api/order/add`, cart);
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};
