import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.104:8080/home'
});

export default api;