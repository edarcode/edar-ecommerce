import { axiosGet } from "./axios";

export const isTokenAuthorized = async () => {
  const data = await axiosGet({
    url: "/users/verify/token",
  });
  if (data.msg === "Authorized") return true;
  return false;
};
