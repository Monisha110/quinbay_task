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
