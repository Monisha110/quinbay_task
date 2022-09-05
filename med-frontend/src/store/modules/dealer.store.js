import Vue from "vue";
import {
  getAllProductFromAdmin,
  getAllProductByDealerId,
  getAllRequestHistory,
  getAllRequestById,
} from "@/service/dealer.service";

export default {
  state: {
    dealerProductList: [],
    dealerInventoryList: [],
    dealerRequestHistory: [],
    dealerRequestHistoryFromRetailer: [],
  },
  getters: {
    getDealerProductList(state) {
      return state.dealerProductList;
    },
    getDealerInventory(state) {
      return state.dealerInventoryList;
    },
    getDealerRequestHistory(state) {
      return state.dealerRequestHistory;
    },
    getDealerRequestHistoryFromRetailer(state) {
      return state.dealerRequestHistoryFromRetailer;
    },
  },
  mutations: {
    setDealerProductList(state, productList) {
      state.dealerProductList = productList;
    },
    setDealerInventory(state, inventoryList) {
      state.dealerInventoryList = inventoryList;
    },
    setDealerRequestHistory(state, requestHistory) {
      state.dealerRequestHistory = requestHistory;
    },
    setDealerRequestHistoryFromRetailer(state, requestHistory) {
      state.dealerRequestHistoryFromRetailer = requestHistory;
    },
  },
  actions: {
    GET_ALL_PRODUCT_FROM_ADMIN({ commit }, value = "") {
      getAllProductFromAdmin({
        searchText: value,
        successCallback: ({ data }) => {
          commit("setDealerProductList", data.content);
        },
        errorCallback: (err) => {
          Vue.$toast.error(err.response.data.message);
        },
      });
    },

    GET_ALL_PRODUCT_BY_DEALER_ID({ commit }, value = "") {
      getAllProductByDealerId({
        dealerId: value,
        successCallback: ({ data }) => {
          commit("setDealerInventory", data.content);
        },
        errorCallback: (err) => {
          Vue.$toast.error(err.response.data.message);
        },
      });
    },

    GET_ALL_REQUEST_HISTORY(
      { commit },
      { dealerId = "", requestId = "", status = "" }
    ) {
      getAllRequestHistory({
        dealerId: dealerId,
        requestId: requestId,
        status: status,
        successCallback: ({ data }) => {
          commit("setDealerRequestHistory", data);
        },
        errorCallback: (err) => {
          Vue.$toast.error(err.response.data.message);
        },
      });
    },

    GET_ALL_REQUEST_FROM_RETAILER(
      { commit },
      { userId = "", requestId = "", status = "" }
    ) {
      getAllRequestById({
        userId: userId,
        requestId: requestId,
        status: status,
        successCallback: ({ data }) => {
          commit("setDealerRequestHistoryFromRetailer", data);
        },
        errorCallback: (err) => {
          Vue.$toast.error(err.response.data.message);
        },
      });
    },
  },
};
