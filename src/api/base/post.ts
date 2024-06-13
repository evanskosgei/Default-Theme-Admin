import axiosInstance from "./axios";

const POST = (url: string, data?: any, params?: any) => axiosInstance.post(url, data, { ...params });

export default POST;
