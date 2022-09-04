import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "InventoryActionModal",
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
        name: "",
        imageUrl: "",
        price: "",
        netQuantity: "",
        description: "",
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
  computed: {
    checkMatchPassword() {
      return (
        this.userData.password &&
        this.confirmPassword &&
        this.userData.password !== this.confirmPassword
      );
    },

    checkAllField() {
      return (
        this.product.name.length > 4 &&
        this.product.imageUrl.length > 4 &&
        this.product.price &&
        this.product.netQuantity &&
        this.product.description.length > 4
      );
    },
    checkNameLength() {
      return this.userData.name < 5;
    },
  },
  mounted() {
    const propsProduct = this.modalObjectData.productData;
    console.log(this.modalObjectData);
    if (propsProduct !== null) {
      this.product.id = propsProduct.id;
      this.product.name = propsProduct.name;
      this.product.imageUrl = propsProduct.imageUrl;
      this.product.price = propsProduct.price;
      this.product.tax = propsProduct.tax;
      this.product.netQuantity = propsProduct.netQuantity;
      this.product.description = propsProduct.description;
    }
    this.modalHeader = this.modalObjectData.modalHeader;
    this.modalButtonLabel = this.modalObjectData.modalButtonName;
  },
};
