import secureLocalStorage from "react-secure-storage";

export function setUserDetails(user) {
  secureLocalStorage.setItem("user", JSON.stringify(user));
}

export function getUserDetails() {
  return JSON.parse((secureLocalStorage.getItem("user") as string) ?? "null");
}

export function setToken(token: string) {
  secureLocalStorage.setItem("token", JSON.stringify(token));
}

export function getToken() {
  return JSON.parse(secureLocalStorage.getItem("token") as string);
}