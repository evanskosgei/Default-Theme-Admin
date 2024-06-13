/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axiosInstance from "./axios";

const GET = (url: string, params?: any) => axiosInstance.get(url, { ...params });

export default GET;
