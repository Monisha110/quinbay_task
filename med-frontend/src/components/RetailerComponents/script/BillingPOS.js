import ButtonComponent from "@/components/ButtonComponent.vue";
import CartProductItem from "@/components/RetailerComponents/CartProductItem.vue";
import { mapGetters } from "vuex";
import { makeOrder } from "@/service/retailer.service";
import Vue from "vue";

export default {
  name: "BillingPageProductList",
  components: {
    ButtonComponent,
    CartProductItem,
  },
  data() {
    return {
      paymentMethod: "Cash",
      orderDataToModal: {},
    };
  },
  computed: {
    ...mapGetters({
      cartProducts: "getCartProduct",
      totalPrice: "getTotalPrice",
      totalTax: "getTotalTax",
      userId: "getUserId",
    }),
  },
  methods: {
    completeCheckOut() {
      const orderData = {
        orderItems: this.cartProducts,
        paymentMethod: this.paymentMethod,
        retailerId: this.userId,
        subTotal: this.totalPrice + this.totalTax,
      };
      makeOrder({
        orderData,
        successCallback: (res) => {
          console.log(res);
          Vue.$toast.success("Order Successfull");
          this.$store.commit("clearCart");
        },
        errorCallback: (err) => {
          console.log(err);
          Vue.$toast.error("Order Failed");
        },
      });
    },
  },
};
