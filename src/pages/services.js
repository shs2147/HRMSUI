import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios.post("/usermaster/saveuser", user).then((response) => response.data);
};
