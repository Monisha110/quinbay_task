import {
  baseUserUrl,
  baseRetailerUrl,
  baseDealerUrl,
  baseOrderUrl,
} from "@/contants/urls";
import axios from "axios";
import { getToken } from "@/utils/storage.js";

let axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();
  console.log(token, "Setted");
  config.headers.Authorization = token;
  return config;
});

export const getAllProductsFromAllDealers = ({
  searchKey,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(
      `${baseDealerUrl}/dealer/search/all?page=0&query=${searchKey}&size=100`
    )
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllProductByRetailerId = ({
  retailerId,
  searchKey,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(`${baseRetailerUrl}/retailer/id?id=${retailerId}&query=${searchKey}`)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

//Retailer Sales History
export const getAllSalesHistory = ({
  retailerId,
  orderId,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(`${baseOrderUrl}/order/user?id=${retailerId}&query=${orderId}`)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllRequestHistory = ({
  retailerId,
  requestId,
  status,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(
      `${baseUserUrl}/stock/history/${retailerId}?requestId=${requestId}&status=${status}`
    )
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const requestStockFromDealer = ({
  requestData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .post(`${baseUserUrl}/stock/dealer`, requestData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const makeOrder = ({ orderData, successCallback, errorCallback }) => {
  axiosInstance
    .post(`${baseOrderUrl}/order/make`, orderData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};
