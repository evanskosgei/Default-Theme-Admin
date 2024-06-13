/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axiosInstance from "./axios";

const DELETE = (url: string, params?: any) => axiosInstance.delete(url, params);

export default DELETE;
