import axios from 'axios'

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
      window.location = '/login'
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
    if(error.response.status === 401) {
      window.location = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
