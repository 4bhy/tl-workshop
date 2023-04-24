import axios from 'axios';

const instance = axios.create({
        baseURL: 'https://tl-workshop.onrender.com/api'
    });
    
export default instance;