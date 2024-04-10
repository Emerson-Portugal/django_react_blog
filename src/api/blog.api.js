import axios from "axios";

const URL = "http://localhost:5000";

console.log(URL);
const tasksApi = axios.create({
  baseURL: `${URL}/api/blog/v1/blogs`,
});

export const getAllTasks = () => tasksApi.get("/");