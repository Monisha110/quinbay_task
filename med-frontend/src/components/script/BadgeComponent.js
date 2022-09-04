export default {
  name: "BadgeComponent",
  props: {
    label: {
      type: String,
      default: () => {},
    },
    className: {
      type: String,
      default: () => {},
    },
  },
};
