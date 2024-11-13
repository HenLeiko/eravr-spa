import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_API_URL || 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: process.env.VUE_API_WITH_CREDENTIALS === 'true'
})



export default apiClient