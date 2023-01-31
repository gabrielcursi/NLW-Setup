import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333", // substituir 'localhost' por seu ip
});
