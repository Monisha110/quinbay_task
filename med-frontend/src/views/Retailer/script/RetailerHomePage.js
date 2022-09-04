import NavBar from "@/components/NavBar.vue";
import { retailerNavBarRoutes } from "@/contants/navigationRoutes.js";

export default {
  name: "RetailerHomePage",
  data() {
    return {
      routes: retailerNavBarRoutes,
    };
  },
  components: {
    NavBar,
  },
};
