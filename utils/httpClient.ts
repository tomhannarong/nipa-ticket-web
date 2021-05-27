import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL,
});

export default httpClient;
