export default {
  name: "CartProductItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    productIndex: {
      type: Number,
      default: () => {},
    },
  },
  methods: {
    subStringProduct(product) {
      return product.substring(0, 10) + "...";
    },
  },
};
