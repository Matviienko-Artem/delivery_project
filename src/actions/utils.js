// eslint-disable-next-line no-undef
export const baseUrl = `${process.env.REACT_APP_SERVER_URL}/api`;

export async function wrapAxiosRequest(request) {
  try {
    const response = await request;

    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
}
