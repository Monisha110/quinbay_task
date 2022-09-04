import BadgeComponent from "@/components/BadgeComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "InventoryTableList",
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
      this.showActionModal = true;
      const constructedModalData = {
        modalHeader: "Edit Product Information",
        productData: data,
        modalButtonName: "Save Product",
      };
      this.$emit("sendDataToEditModal", constructedModalData);
    },
    toDataString(date) {
      return new Date(date).toDateString();
    },
  },
};
