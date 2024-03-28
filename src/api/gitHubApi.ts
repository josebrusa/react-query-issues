import axios from "axios";

const TOKEN = import.meta.env.VITE_API_TOKEN

export const gitHubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        Authorization: TOKEN,
    }
});