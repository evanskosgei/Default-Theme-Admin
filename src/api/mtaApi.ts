import { del, get, post } from "./base";

const mtaApi = {
  auth: {
    login: (data: any) => post("/authentication/login", data),
  },
};

export default mtaApi;
