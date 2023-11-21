import axios from 'axios';

export default axios.create({
  // -- APPLY BASE API URL HERE -- //
  baseURL: 'http://10.0.20.75:3301/api/',
});
