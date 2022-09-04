import RequestHistoryTableList from "@/components/DealerComponents/RequestHistoryTableList.vue";
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
      dealerId: "getUserId",
      dealerRequestHistory: "getDealerRequestHistory",
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
    this.$store.dispatch("GET_ALL_REQUEST_HISTORY", {
      dealerId: this.dealerId,
    });
  },
};
