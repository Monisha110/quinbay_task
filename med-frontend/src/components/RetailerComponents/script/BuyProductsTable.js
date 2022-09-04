import BuyProductsTableList from "@/components/RetailerComponents/BuyProductsTableList.vue";
import BuyRequestModal from "@/components/RetailerComponents/BuyRequestModal.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { requestStockFromDealer } from "@/service/retailer.service";
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
      productList: "getRetailerBuyProductList",
      userId: "getUserId",
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
        senderId: this.userId,
        receiverId: this.selectedProduct.dealerId,
      };
      console.log(payloadForStockRequest);
      requestStockFromDealer({
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
          console.log(err);
          Vue.$toast.error(err.message);
        },
      });
    },
    searchName() {
      this.$store.dispatch(
        "GET_ALL_PRODUCTS_FROM_ALL_DEALERS",
        this.searchText
      );
    },
  },
  created() {
    this.$store.dispatch("GET_ALL_PRODUCTS_FROM_ALL_DEALERS");
  },
};
