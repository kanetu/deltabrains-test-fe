import axios from "axios";

const baseUrl = process.env.API_BASE_URL || "http://localhost:3001/";
const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status == 401) {
            window.location.href = "https://example.com/login";
        }
        console.error(
            "Looks like there was a problem. Status Code: " + res.status
        );
        return Promise.reject(error);
    }
);

export default axiosClient;
