import NavBar from "@/components/NavBar.vue";
import { dealerNavBarRoutes } from "@/contants/navigationRoutes.js";
export default {
  name: "DealerHomePage",
  data() {
    return {
      routes: dealerNavBarRoutes,
    };
  },
  components: {
    NavBar,
  },
};
