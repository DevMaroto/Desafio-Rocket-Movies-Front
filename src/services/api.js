import axios from "axios";

export const api = axios.create({
  baseURL: "https://desafio-rocket-movies-back.onrender.com"
});

