import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/views/LoginPage.vue";

import AdminHomePage from "@/views/Admin/AdminHomePage.vue";
import AdminDashBoard from "@/views/Admin/AdminDashBoard.vue";
import AdminUserManagement from "@/views/Admin/AdminUserManagement.vue";
import AdminInventory from "@/views/Admin/AdminInventory.vue";

import RetailerDashBoard from "@/views/Retailer/RetailerDashBoard.vue";
import RetailerHomePage from "@/views/Retailer/RetailerHomePage.vue";
import RetailerInventory from "@/views/Retailer/RetailerInventory.vue";
import RetailerBuyProducts from "@/views/Retailer/RetailerBuyProducts.vue";
import RetailerSalesHistory from "@/views/Retailer/RetailerSalesHistory.vue";
import RetailerRequestHistory from "@/views/Retailer/RetailerRequestHistory.vue";

import DealerHomePage from "@/views/Dealer/DealerHomePage.vue";
import DealerDashBoard from "@/views/Dealer/DealerDashBoard.vue";
import DealerRequestHistory from "@/views/Dealer/DealerRequestHistory.vue";
import DealerInventory from "@/views/Dealer/DealerInventory.vue";
import DealerBuyProducts from "@/views/Dealer/DealerBuyProducts.vue";

import NotFound from "@/views/HelperPages/NotFound.vue";

import { getToken } from "@/utils/storage";
import store from "@/store";
import { redirectDashboard } from "@/utils/roleRedirect";
import { checkAuthToken } from "@/service/auth.service.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      console.log(from, to);

      if (to.name === "LoginPage" && getToken()) {
        checkAuthToken({
          successCallback: (res) => {
            if (res.status === 200) {
              store.commit("setUserData", res.data);
              const { data } = res;
              redirectDashboard(data);
            }
          },
          errorCallback: (err) => {
            console.log(err);
            router.replace({ name: "LoginPage" });
          },
        });
      }

      next();
    },
  },
  {
    path: "/admin",
    component: AdminHomePage,
    name: "AdminHomePage",
    children: [
      {
        path: "",
        name: "AdminDashBoard",
        component: AdminDashBoard,
      },
      {
        path: "user-management",
        name: "AdminUserManagement",
        component: AdminUserManagement,
      },
      {
        path: "inventory",
        name: "AdminInventory",
        component: AdminInventory,
      },
    ],
    beforeEnter: (to, from, next) => {
      checkValidation("ADMIN", next);
    },
  },
  {
    path: "/retailer",
    component: RetailerHomePage,
    children: [
      {
        path: "",
        name: "RetailerDashBoard",
        component: RetailerDashBoard,
      },
      {
        path: "sales-history",
        name: "RetailerSalesHistory",
        component: RetailerSalesHistory,
      },
      {
        path: "buy-products",
        name: "RetailerBuyProducts",
        component: RetailerBuyProducts,
      },
      {
        path: "request-history",
        name: "RetailerRequestHistory",
        component: RetailerRequestHistory,
      },
      {
        path: "inventory",
        name: "RetailerInventory",
        component: RetailerInventory,
      },
    ],
    beforeEnter: (to, from, next) => {
      checkValidation("RETAILER", next);
    },
  },
  {
    path: "/dealer",
    name: "DealerHomePage",
    component: DealerHomePage,
    children: [
      {
        path: "",
        name: "DealerDashBoard",
        component: DealerDashBoard,
      },
      {
        path: "request-history",
        name: "DealerRequestHistory",
        component: DealerRequestHistory,
      },
      {
        path: "buy-products",
        name: "DealerBuyProducts",
        component: DealerBuyProducts,
      },
      {
        path: "inventory",
        name: "DealerInventory",
        component: DealerInventory,
      },
    ],
    beforeEnter: (to, from, next) => {
      checkValidation("DEALER", next);
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const checkValidation = (role, next) => {
  if (getToken()) {
    checkAuthToken({
      successCallback: (res) => {
        if (res.status === 200) {
          store.commit("setUserData", res.data);
          const { data } = res;
          if (data.roles[0].authority === role && data.authenticated)
            return next();
          else {
            return next({ name: "LoginPage" });
          }
        }
      },
      errorCallback: (err) => {
        console.log(err);
        router.replace({ name: "LoginPage" });
      },
    });
  } else {
    return next({ name: "LoginPage" });
  }
};

router.afterEach((to) => {
  if (!getToken()) {
    if (to.name !== "LoginPage") {
      router.replace("/");
    }
  }
});

export default router;
