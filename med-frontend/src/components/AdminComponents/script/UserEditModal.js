import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "UserEditModal",
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isUserNameUpdate: true,
      confirmPassword: "",
      userData: {
        name: "",
        id: "",
        password: "",
      },
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    toggleOptionChange() {
      this.isUserNameUpdate = !this.isUserNameUpdate;
    },
    closeAction() {
      this.$emit("closeAction");
    },
    confirmAction() {
      this.$emit("saveAction", {
        isUpdateName: this.isUserNameUpdate,
        userData: this.userData,
      });
      this.$emit("closeAction");
    },
  },
  computed: {
    isButtonEnabled() {
      if (this.isUserNameUpdate) {
        return this.userData.name.length > 4;
      }
      return (
        this.userData.password &&
        this.confirmPassword &&
        this.userData.password === this.confirmPassword
      );
    },
    activatePasswordMatchError() {
      return (
        this.userData.password &&
        this.confirmPassword &&
        this.userData.password !== this.confirmPassword
      );
    },
    checkNameLength() {
      return this.userData.name.length < 5;
    },
  },
  created() {
    this.userData.name = this.userInfo.name;
    this.userData.id = this.userInfo.userId;
  },
};
