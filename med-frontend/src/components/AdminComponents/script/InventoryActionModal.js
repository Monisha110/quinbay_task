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
        tax: "",
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
    checkNegativePrice() {
      return this.product.price && this.product.price < 1;
    },
    checkNegativeNetQuantity() {
      return this.product.netQuantity && this.product.netQuantity < 1;
    },
    checkNegativeTax() {
      return (
        this.product.tax &&
        (this.product.tax < 0 || this.product.tax > this.product.price / 2)
      );
    },
    checkAllField() {
      return (
        this.product.name.length > 4 &&
        this.product.imageUrl.length > 4 &&
        this.product.price > 0 &&
        this.product.netQuantity > 0 &&
        this.product.tax &&
        !this.checkNegativeTax &&
        this.product.description.length > 4
      );
    },
    checkNameLength() {
      return this.userData.name < 5;
    },
  },
  mounted() {
    const propsProduct = this.modalObjectData.productData;
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
