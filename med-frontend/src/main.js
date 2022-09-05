import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import VueToast from "vue-toast-notification";
import VueLottiePlayer from "vue-lottie-player";
import VueSkeletonLoader from "skeleton-loader-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "vue-toast-notification/dist/theme-sugar.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck, faCircleXmark, faCircleExclamation);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue-skeleton-loader", VueSkeletonLoader);
Vue.use(VueLottiePlayer);

Vue.use(VueToast, {
  position: "bottom-right",
  duration: 4000,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
