// Integration between front and backend

import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:4000"
})