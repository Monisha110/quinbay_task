import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "BuyProductsModal",
  props: {
    modalObjectData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      product: {
        id: "",
        quantity: "",
        name: "",
      },
      modalHeader: "",
      modalButtonLabel: "",
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    closeAction() {
      this.$emit("closeAction");
    },
    confirmAction() {
      this.$emit("saveAction", this.product);
    },
  },
  mounted() {
    this.product.id = this.modalObjectData.productId;
    this.product.name = this.modalObjectData.productName;
    this.modalHeader = this.modalObjectData.modalHeader;
    this.modalButtonLabel = this.modalObjectData.modalButtonName;
  },
};
