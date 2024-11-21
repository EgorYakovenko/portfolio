import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const getAllBooks = async () => {
  const response = await axios.get("/project");
  return response.data;
};
