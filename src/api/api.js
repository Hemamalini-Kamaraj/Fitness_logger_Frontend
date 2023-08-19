import axios from "axios";

const url = "https://fitness-logger-e4r1.onrender.com";

let baseUrl = axios.create({
  baseURL: url,
});

export default baseUrl;
