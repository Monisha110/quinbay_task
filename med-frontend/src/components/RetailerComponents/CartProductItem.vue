<template>
  <div class="cart--item">
    <div class="d-flex justify-content-between align-items-center gap-2">
      <div class="d-flex gap-2 justify-content-between align-items-center">
        <div>
          <img :src="product.imageUrl" class="cart--image" alt="product" />
        </div>
        <div class="d-flex flex-column">
          <div>
            <p class="cart--item--name">{{ subStringProduct(product.name) }}</p>
          </div>
          <div>
            <p class="cart--item--price">
              ₹ {{ product.price * product.quantity }}
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-between align-items-end">
        <div
          class="d-flex count--container justify-content-between align-items-center"
        >
          <button
            class="product--count--btn px-2"
            type="button"
            @click="
              $store.dispatch('DECREASE_PRODUCT_QUANTITY_FROM_CART', {
                productId: product.productId,
              })
            "
          >
            -
          </button>
          <div>
            <p class="my-0 mx-3 cart--item--count">
              {{ product.quantity }}
            </p>
          </div>
          <button
            class="product--count--btn"
            type="button"
            @click="$store.dispatch('ADD_PRODUCT_TO_CART', { product })"
          >
            +
          </button>
        </div>
        <div>
          <p
            class="product--delete"
            @click="
              $store.dispatch('REMOVE_PRODUCT_FROM_CART', { productIndex })
            "
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/components/RetailerComponents/script/CartProductItem.js"></script>
<style scoped>
.cart--image {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.cart--item {
  background-color: #f2f7fb;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.count--container {
  background-color: #ffffff;
  padding: 0px;
  height: fit-content;
  border-radius: 10px;
}
.product--delete {
  color: red;
  font-size: 13px;
  margin: 0;
  margin-top: 5px;
  font-weight: 500;
}
.product--delete:hover {
  cursor: pointer;
}
.product--count--btn {
  background-color: #000000;
  color: #f2f7fb;
  border: none;
  outline: none;
  border-radius: 5px;
  /* height: 100%;
  width: 100%; */
  font-size: 15px;
  font-weight: 800;
}
.cart--item--name {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
}
.cart--item--price {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
}
.cart--item--count {
  font-size: 13px;
  font-weight: 700;
}
</style>
