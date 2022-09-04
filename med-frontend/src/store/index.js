import Vuex from "vuex";
import Vue from "vue";

import user from "@/store/modules/user.store";
import admin from "@/store/modules/admin.store";
import dealer from "@/store/modules/dealer.store";
import retailer from "@/store/modules/retailer.store";
import cart from "@/store/modules/cart.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    admin,
    dealer,
    retailer,
    cart,
  },
});
