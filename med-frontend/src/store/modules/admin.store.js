import Vue from "vue";

import {
  getAllUser,
  getAllInventoryProduct,
  getAllRequestById,
} from "@/service/admin.service";

export default {
  state: {
    userList: [],
    inventoryList: [],
    requestHistory: [],
  },
  getters: {
    getAllUser(state) {
      return state.userList;
    },
    getInventory(state) {
      return state.inventoryList;
    },
    getRequestHistory(state) {
      return state.requestHistory;
    },
  },
  mutations: {
    setUserList(state, userList) {
      state.userList = userList;
    },
    setInventory(state, inventoryList) {
      state.inventoryList = inventoryList;
    },
    setRequestHistory(state, requestHistory) {
      state.requestHistory = requestHistory;
    },
  },
  actions: {
    GET_ALL_USER({ commit }, value = "") {
      getAllUser({
        searchText: value,
        successCallback: ({ data }) => {
          commit("setUserList", data.content);
        },
        errorCallback: (err) => {
          console.log(err.response.data.message);
          Vue.$toast.error("Something gone wrong! Please again later.");
        },
      });
    },
    GET_ALL_PRODUCT({ commit }, value = "") {
      getAllInventoryProduct({
        searchText: value,
        successCallback: ({ data }) => {
          commit("setInventory", data.content);
        },
        errorCallback: (err) => {
          console.log(err.response.data.message);
          Vue.$toast.error("Something gone wrong! Please again later.");
        },
      });
    },
    GET_ALL_REQUEST({ commit }, { userId = "", requestId = "", status = "" }) {
      getAllRequestById({
        userId: userId,
        requestId: requestId,
        status: status,
        successCallback: ({ data }) => {
          commit("setRequestHistory", data);
        },
        errorCallback: (err) => {
          console.log(err.response.data.message);
          Vue.$toast.error("Something gone wrong! Please again later.");
        },
      });
    },
  },
};
