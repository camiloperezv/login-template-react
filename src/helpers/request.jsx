import axios from 'axios';
import Auth from './auth';
const serverUrl = 'http://localhost:3000/api/v1';
const Request = {
  setJWT(){
    axios.defaults.headers.common.Authorization = 'Bearer ' + Auth.jwt;
  },
  GET(url) {
    return axios.get(serverUrl+url);
  },
  POST(url,data) {
    return axios.post(serverUrl+url,data);
  },
  PUT(url,data) {
    return axios.put(serverUrl+url,data);
  }
};
export default Request;