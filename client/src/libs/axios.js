import axios from 'axios';

const axiosIns = axios.create({
    baseURL: 'http://localhost:4000/'
});

axiosIns.defaults.headers.common['Authorization'] = 'Bearer token';

export default axiosIns;