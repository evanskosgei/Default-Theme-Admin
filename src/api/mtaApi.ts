import { del, get, post } from "./base";

const mtaApi = {
  auth: {
    login: (data: any) => post("/users/login", data),
  },
};

export default mtaApi;
