import { baseUserUrl } from "@/contants/urls";
import { getToken } from "@/utils/storage.js";
import axios from "axios";

// axios.defaults.headers.common['Authorization'] = getToken();

export const checkAuthToken = ({ successCallback, errorCallback }) => {
  axios
    .get(`${baseUserUrl}/auth/validateToken`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const authUser = ({ userData, successCallback, errorCallback }) => {
  axios
    .post(`${baseUserUrl}/login`, userData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};
