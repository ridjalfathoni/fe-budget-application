import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

let accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null
const baseURL = 'http://localhost:3001/api'

const axiosInstance = axios.create({
    baseURL: baseURL,
    header: {
        Authorization: `Bearer ${accessToken}`
    }
})

const axiosPublic = axios.create({
    baseURL: baseURL
})

axiosInstance.interceptors.request.use(async req => {
    if(!accessToken){
        accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    const user = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff((dayjs()) < 1);
    if (!isExpired) return req
    let refreshToken = localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null
    const response = await axios.post(`${baseURL}/auth/refreshToken`, {
        refreshToken: refreshToken
    }).then((res) => {
        return res
    }).catch((err) => {
        if (err.response.status === 403) {
            localStorage.clear()
            return window.location.href = '/'
        }
    })
    localStorage.setItem('accessToken', response.data.accessToken,);
    accessToken = localStorage.getItem('accessToken');
    req.headers.Authorization = `Bearer ${accessToken}`;
    return req
    
})

export { axiosInstance, axiosPublic};