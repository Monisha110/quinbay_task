export default {
  name: "ButtonComponent",
  props: {
    label: {
      type: String,
      default: "Submit",
    },
    type: {
      type: String,
      default: "button",
    },
    buttonStyle: {
      type: String,
      default: "btn--primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
