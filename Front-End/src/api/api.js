import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5173",});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  console.log("Token Sent :", token);

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;