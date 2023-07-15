import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const saveData = (data) => {
  return api
    .post("/student/saveData", data)
    .then((res) => res.data)
    .catch((err) => err);
};
