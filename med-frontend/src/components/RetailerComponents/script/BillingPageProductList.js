import ButtonComponent from "@/components/ButtonComponent.vue";
import BadgeComponent from "@/components/BadgeComponent.vue";
export default {
  name: "BillingPageProductList",
  data() {
    return {
      editModalToggle: false,
      showActionModal: false,
      modalData: {},
    };
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    ButtonComponent,
    BadgeComponent,
  },
  computed: {
    checkAvailabilityStatus() {
      return this.product.stockInHand > 0;
    },
  },
  methods: {
    addToCart(product) {
      this.$emit("addToCart", product);
    },
  },
};
