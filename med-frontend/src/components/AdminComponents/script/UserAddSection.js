import ButtonComponent from "@/components/ButtonComponent.vue";
import { createNewUser } from "@/service/admin.service";

export default {
  name: "UserManagementSection",
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
        role: null,
      },
    };
  },
  components: {
    ButtonComponent,
  },
  computed: {
    validateField() {
      return (
        this.user.name &&
        this.user.username &&
        this.user.password &&
        this.user.role
      );
    },
  },
  methods: {
    createNewUserAccount() {
      createNewUser({
        userData: this.user,
        successCallback: (res) => {
          if (res.status === 200) {
            this.$store.dispatch("GET_ALL_USER");
          }
        },
        errorCallback: (err) => {
          console.log(err.message);
        },
      });
      this.user = {
        name: "",
        username: "",
        password: "",
        role: null,
      };
    },
  },
};
