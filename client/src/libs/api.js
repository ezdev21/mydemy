import axios from 'axios'
import { toast } from 'react-toastify';

const api = axios.create({
    baseURL: 'http://localhost:4000/'
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token"))
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken
    }
    else{
      //window.location = '/login'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(!error.response){
      toast.error('Connection Error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if(error.response?.status === 401) {
      window.location = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
