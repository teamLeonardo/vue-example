import axios from "axios"


export const platziAxios = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
})