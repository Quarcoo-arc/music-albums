import axios from "axios";

export const getRequest = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error((error as string) || "Failed to fetch data");
  }
};

export const deleteRequest = async (url: string) => {
  try {
    const response = await axios.delete(url);
    console.log(response, response.data);

    return response;
  } catch (error) {
    throw Error((error as string) || "Failed to delete resource");
  }
};
