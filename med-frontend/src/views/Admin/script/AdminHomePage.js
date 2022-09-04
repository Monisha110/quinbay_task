import NavBar from "@/components/NavBar.vue";
import { adminNavBarRoutes } from "@/contants/navigationRoutes.js";

export default {
  name: "AdminMainPage",
  data() {
    return {
      routes: adminNavBarRoutes,
    };
  },
  components: {
    NavBar,
  },
};
