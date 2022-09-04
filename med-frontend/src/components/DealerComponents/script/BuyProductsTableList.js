import BadgeComponent from "@/components/BadgeComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "BuyProductsTableList",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {
    BadgeComponent,
    ButtonComponent,
  },
  computed: {
    checkProductionStatus() {
      return this.product.available;
    },
    checkAvailabilityStatus() {
      return this.product.netQuantity > 0;
    },
  },
  methods: {
    changeProductionStatus() {
      this.$emit("activateModal", { productId: this.product.id });
    },
    toggleActionModal(data) {
      this.showBuyProductsModal = true;
      const constructedModalData = {
        modalHeader: "Request Product",
        productId: data.id,
        productName: data.name,
        modalButtonName: "Send Request",
      };
      this.$emit("sendDataToEditModal", constructedModalData);
    },
  },
};
