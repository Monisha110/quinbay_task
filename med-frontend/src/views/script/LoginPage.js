import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    authenticate() {
      this.$store.dispatch("AUTHENTICATE_USER", { userData: this.user });
    },
  },
  computed: {
    validateFormEntry() {
      return this.user.username && this.user.password;
    },
    usernameValidation() {
      return this.user.username.match(/[^A-Za-z0-9]/) ? true : false;
    },
  },
};
