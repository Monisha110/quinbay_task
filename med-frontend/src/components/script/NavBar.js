import ButtonComponent from "@/components/ButtonComponent.vue";
import { deleteToken } from "@/utils/storage";
import { mapGetters } from "vuex";
import BadgeComponent from "@/components/BadgeComponent.vue";

export default {
  name: "NavBar",
  props: {
    NavBarData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    ButtonComponent,
    BadgeComponent,
  },
  computed: {
    ...mapGetters({
      user: "getUserFromState",
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT_USER");
      deleteToken();
      this.$router.replace("/");
    },
  },
};
