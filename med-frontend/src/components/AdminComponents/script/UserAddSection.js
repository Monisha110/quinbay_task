import ButtonComponent from "@/components/ButtonComponent.vue";
import { createNewUser } from "@/service/admin.service";
import Vue from "vue";
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
        this.user.role &&
        !this.usernameValidation &&
        !this.nameValidation
      );
    },
    usernameValidation() {
      return this.user.username.match(/[^A-Za-z0-9]/) ? true : false;
    },
    nameValidation() {
      return this.user.name.match(/[^A-Za-z0-9]/) ? true : false;
    },
  },
  methods: {
    createNewUserAccount() {
      createNewUser({
        userData: this.user,
        successCallback: (res) => {
          if (res.status === 200) {
            this.$store.dispatch("GET_ALL_USER");
            Vue.$toast.success("User Created");
          }
        },
        errorCallback: (err) => {
          console.log(err.response.data.message);
          Vue.$toast.error("Something gone wrong! Please again later.");
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
