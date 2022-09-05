import BuyProductsTableList from "@/components/DealerComponents/BuyProductsTableList.vue";
import BuyRequestModal from "@/components/DealerComponents/BuyRequestModal.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { requestStock } from "@/service/dealer.service";
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "BuyProductsTable",
  components: {
    BuyProductsTableList,
    BuyRequestModal,
    ButtonComponent,
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
      productList: "getDealerProductList",
      user: "getUserFromState",
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
    clearSearch() {
      this.searchText = "";
      this.$store.dispatch("GET_ALL_PRODUCT_FROM_ADMIN");
    },
    requestActionCall(data) {
      const { quantity, id } = data;
      const payloadForStockRequest = {
        productId: id,
        requestedQuantity: quantity,
        senderId: this.user.userId,
      };
      requestStock({
        requestData: payloadForStockRequest,
        successCallback: (res) => {
          if (res.status === 200) {
            Vue.$toast.success("Request Successfull");
            this.showBuyProductModal = false;
          } else {
            Vue.$toast.error("Request Failed");
          }
        },
        errorCallback: (err) => {
          console.log(err.response.data.message);
          Vue.$toast.error("Something gone wrong! Please again later.");
        },
      });
    },
    searchName() {
      this.$store.dispatch("GET_ALL_PRODUCT_FROM_ADMIN", this.searchText);
    },
  },
  created() {
    this.$store.dispatch("GET_ALL_PRODUCT_FROM_ADMIN");
  },
};
