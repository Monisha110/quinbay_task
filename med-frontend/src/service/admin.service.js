import { baseUserUrl } from "@/contants/urls";
import axios from "axios";
import { getToken } from "@/utils/storage.js";

// axios.defaults.headers.common["Authorization"] = getToken();

let axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();
  console.log(token, "Setted");
  config.headers.Authorization = token;
  return config;
});

export const createNewUser = ({ userData, successCallback, errorCallback }) => {
  axiosInstance
    .post(`${baseUserUrl}/users/add`, userData, {})
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const updateUserName = ({
  userData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .put(`${baseUserUrl}/users/update/name`, userData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const updateUserPassword = ({
  userData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .put(`${baseUserUrl}/users/update/password`, userData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const updatePermission = ({
  userId,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .put(`${baseUserUrl}/users/update/active/${userId}`)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllUser = ({ searchText, successCallback, errorCallback }) => {
  axiosInstance
    .get(`${baseUserUrl}/users/search?page=0&query=${searchText}&size=10`)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const getAllInventoryProduct = ({
  searchText,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .get(`${baseUserUrl}/inventory/search?page=0&query=${searchText}&size=10`)
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

export const createNewProduct = ({
  productData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .post(`${baseUserUrl}/inventory/add`, productData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const updateProductData = ({
  productData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .put(`${baseUserUrl}/inventory/update`, productData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const updateProductPermission = ({
  productId,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .put(`${baseUserUrl}/inventory/update/active/${productId}`)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};

export const changeRequestStatus = ({
  requestData,
  successCallback,
  errorCallback,
}) => {
  axiosInstance
    .put(`${baseUserUrl}/stock/update/status`, requestData)
    .then((res) => {
      successCallback && successCallback(res);
    })
    .catch((err) => {
      errorCallback && errorCallback(err);
    });
};
