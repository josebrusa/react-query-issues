import axios from "axios";

export const gitHubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        Authorization: 'Bearer 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'
    }
}); 