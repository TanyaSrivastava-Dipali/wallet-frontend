import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:7000",
}
// ,{withCredentials: true,
//    credentials: 'include',headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
// }
);

export default AxiosInstance;
