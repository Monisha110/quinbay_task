import SalesHistoryTableList from "@/components/RetailerComponents/SalesHistoryTableList.vue";
import { mapGetters } from "vuex";

export default {
  name: "SalesHistoryTable",
  components: {
    SalesHistoryTableList,
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
      retailerSalesHistory: "getRetailerSalesHistory",
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
    this.$store.dispatch("GET_ALL_SALES_HISTORY", { retailerId: this.userId });
  },
};
