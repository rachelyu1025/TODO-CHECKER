import axios, { AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
})

export default api; 


