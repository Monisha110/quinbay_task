import Vue from "vue";

export default {
  state: {
    cart: [],
  },
  getters: {
    getCartProduct(state) {
      return state.cart;
    },
    getTotalPrice(state) {
      return Math.floor(
        state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      );
    },
    getTotalTax(state) {
      return Math.floor(
        state.cart.reduce((total, item) => total + item.tax * item.quantity, 0)
      );
    },
  },
  mutations: {
    addProductToCart(state, { product }) {
      console.log(product);

      let item = state.cart.find((item) => item.productId == product.productId);
      if (item) {
        if (item.quantity < item.inventoryQuantity) {
          item.quantity++;
        } else {
          Vue.$toast.error("Out of Stock, Please go for other!");
        }
      } else {
        const productObj = {
          quantity: 1,
          inventoryQuantity: product.stockInHand,
          productId: product.productId,
          imageUrl: product.productDetail.imageUrl,
          description: product.productDetail.description,
          name: product.productDetail.name,
          price: product.productDetail.price,
          tax: product.productDetail.tax,
        };
        state.cart.push({ ...productObj });
      }
    },

    decreaseProductQuantity(state, { productId }) {
      let item = state.cart.find((item) => item.productId == productId);
      if (item.quantity > 1) item.quantity--;
    },

    removeProductFromCart(state, { productIndex }) {
      state.cart.splice(productIndex, 1);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    ADD_PRODUCT_TO_CART({ commit }, product) {
      commit("addProductToCart", product);
    },
    REMOVE_PRODUCT_FROM_CART({ commit }, { productIndex }) {
      console.log(productIndex);
      commit("removeProductFromCart", { productIndex });
    },
    DECREASE_PRODUCT_QUANTITY_FROM_CART({ commit }, productId) {
      commit("decreaseProductQuantity", productId);
    },
  },
};
