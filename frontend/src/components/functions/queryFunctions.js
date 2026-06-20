import Cookies from "js-cookie";

export const getUserId = () => {
  return Cookies.get("userId");
};

export const submitLogin = () => {
  console.log("loggin in !!");
};

export const submitSignUp = () => {
  console.log("signin up !!");
};
