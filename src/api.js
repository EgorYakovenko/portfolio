import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const getAllProject = async () => {
  const response = await axios.get("/project");
  return response.data;
};
