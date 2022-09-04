import InventoryTableList from "@/components/AdminComponents/InventoryTableList.vue";
import ConfirmModal from "@/components/ConfirmModal.vue";
import InventoryActionModal from "@/components/AdminComponents/InventoryActionModal.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { mapGetters } from "vuex";
import Vue from "vue";
import {
  createNewProduct,
  updateProductData,
  updateProductPermission,
} from "@/service/admin.service";

export default {
  name: "InventoryTable",
  data() {
    return {
      showConfirmModal: false,
      showActionModal: false,
      searchText: "",
      selectedProduct: {},
      productIdFromPermission: "",
    };
  },
  components: {
    InventoryTableList,
    ConfirmModal,
    ButtonComponent,
    InventoryActionModal,
  },
  computed: {
    ...mapGetters({
      inventoryList: "getInventory",
    }),
  },
  methods: {
    toggleConfirmModal({ productId }) {
      this.productIdFromPermission = productId;
      this.showConfirmModal = true;
    },
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    closeActionModal() {
      this.showActionModal = false;
    },
    clearSearch() {
      this.searchText = "";
      this.$store.dispatch("GET_ALL_PRODUCT");
    },
    searchName() {
      this.$store.dispatch("GET_ALL_PRODUCT", this.searchText);
    },
    selectedProductFromList(data) {
      this.showActionModal = true;
      this.selectedProduct = data;
    },
    confirmActionCall() {
      updateProductPermission({
        productId: this.productIdFromPermission,
        successCallback: (res) => {
          if (res.status === 200) {
            this.$store.dispatch("GET_ALL_PRODUCT");
            Vue.$toast.success("Status Updated");
          }
        },
        errorCallback: (err) => {
          console.log(err);
          Vue.$toast.error(err.message);
        },
      });
      this.userId = "";
      this.showConfirmModal = false;
    },
    addNewProduct() {
      const constructedData = {
        modalHeader: "Add New Product",
        productData: null,
        modalButtonName: "Create Product",
      };
      this.showActionModal = true;
      this.selectedProduct = constructedData;
    },
    saveActionCall(product) {
      console.log(product);
      if (!product.id) {
        const { id, ...rest } = product;
        console.log(rest, id);
        createNewProduct({
          productData: rest,
          successCallback: (res) => {
            console.log(res);
            if (res.status === 200) {
              Vue.$toast.success("Product Added to Inventory!");
              this.$store.dispatch("GET_ALL_PRODUCT");
            } else {
              Vue.$toast.error("Updated Process declined!");
            }
          },
          errrorCallback: (err) => {
            Vue.$toast.error(err.message);
          },
        });
      } else {
        updateProductData({
          productData: product,
          successCallback: (res) => {
            console.log(res);
            if (res.status === 200) {
              Vue.$toast.success("Inventory Updated!");
              this.$store.dispatch("GET_ALL_PRODUCT");
            } else {
              Vue.$toast.error("Updated Process declined!");
            }
          },
          errrorCallback: (err) => {
            Vue.$toast.error(err);
          },
        });
      }
      this.showActionModal = false;
    },
  },
  created() {
    this.$store.dispatch("GET_ALL_PRODUCT");
  },
};
