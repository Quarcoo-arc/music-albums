import axios from "axios";

export const getRequest = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw String(error);
    }
  }
};

export const deleteRequest = async (url: string) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw String(error);
    }
  }
};
