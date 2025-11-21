import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

const http = axios.create({
  baseURL: BASE_API_URL,
  // withCredentials: true, // Commented out - enable only if backend is configured for credentials
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response || error);
    return Promise.reject(error);
  }
);

const apiService = {
  get: (url, params = {}) => http.get(url, { params }),

  post: (url, data = {}, params = {}) => http.post(url, data, { params }),

  put: (url, data = {}, params = {}) => http.put(url, data, { params }),

  patch: (url, data = {}, params = {}) => http.patch(url, data, { params }),

  delete: (url, params = {}) => http.delete(url, { params }),
};

export default apiService;
