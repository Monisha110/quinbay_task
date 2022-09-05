import { baseUserUrl, baseDealerUrl } from "@/contants/urls";
import axios from "axios";
import { getToken } from "@/utils/storage.js";

let axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();
  config.headers.Authorization = token;
  return config;
});

export const getAllProductFromAdmin = ({
  searchText,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(
      `${baseUserUrl}/inventory/detail/search?page=0&query=${searchText}&size=10`
    )
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllRequestById = ({
  userId,
  requestId,
  status,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(
      `${baseUserUrl}/stock/receiver/${userId}?requestId=${requestId}&status=${status}`
    )
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllProductByDealerId = ({
  dealerId,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(`${baseDealerUrl}/dealer/id?id=${dealerId}&page=0&size=10`)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllRequestHistory = ({
  dealerId,
  requestId,
  status,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(
      `${baseUserUrl}/stock/history/${dealerId}?requestId=${requestId}&status=${status}`
    )
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const requestStock = ({
  requestData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .post(`${baseUserUrl}/stock/admin`, requestData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};
