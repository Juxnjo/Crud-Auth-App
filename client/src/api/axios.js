import axios from "axios";

const instance = axios.create( {
    baseURL: "crud-auth-app-api.vercel.app",
    withCredentials: true
} )

export default instance
