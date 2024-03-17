import axios from 'axios'
import { baseurl } from './constands/constants';
const instance = axios.create({
    baseURL: baseurl,
    
  });


  export default instance