
import axios from 'axios';

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

let baseURL = "http://localhost:9090"
if (!development)
    baseURL = "http://localhost:9090"


export default axios.create({
    baseURL
});