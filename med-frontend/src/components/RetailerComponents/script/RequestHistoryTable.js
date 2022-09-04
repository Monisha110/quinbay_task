import RequestHistoryTableList from "@/components/RetailerComponents/RequestHistoryTableList.vue";
import { mapGetters } from "vuex";

export default {
  name: "RequestHistoryTable",
  components: {
    RequestHistoryTableList,
  },
  data() {
    return {
      showConfirmModal: false,
      showBuyProductModal: false,
      searchText: "",
      selectedProduct: {},
    };
  },
  computed: {
    ...mapGetters({
      userId: "getUserId",
      retailerRequestHistory: "getRetailerRequestHistory",
    }),
  },
  methods: {
    closeActionModal() {
      this.showBuyProductModal = false;
    },
    selectedProductFromList(data) {
      this.showBuyProductModal = true;
      this.selectedProduct = data;
    },
  },
  created() {
    this.$store.dispatch("GET_ALL_REQUEST_HISTORY_RETAILER", {
      retailerId: this.userId,
    });
  },
};
