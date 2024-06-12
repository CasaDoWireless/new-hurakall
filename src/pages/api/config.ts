import axios from "axios";

export const baseURL: string = "http://localhost:3000/api/";

export const api = axios.create({
  baseURL,
});
