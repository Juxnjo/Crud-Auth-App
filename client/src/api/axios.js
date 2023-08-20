import axios from "axios";

const instance = axios.create( {
    baseURL: "crud-auth-app-api.vercel.app/api",
    withCredentials: true
} )

export default instance
