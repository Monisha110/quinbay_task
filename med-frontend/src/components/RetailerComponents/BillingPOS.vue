<template>
  <div class="pos--card">
    <div class="pos--card--header">
      <div class="d-flex justify-content-between align-item-center">
        <div>
          <p class="card--header">Checkout Sale</p>
        </div>
        <div>
          <button class="cart--clear" @click="$store.commit('clearCart')">
            Clear
          </button>
        </div>
      </div>
    </div>
    <hr class="billig--hr" />
    <div class="product--listing">
      <div v-if="cartProducts.length > 0">
        <CartProductItem
          v-for="(data, index) in cartProducts"
          :productIndex="index"
          :key="index"
          :product="data"
        />
      </div>
      <div v-else class="d-flex justify-content-center my-4">
        <p><small>No products in cart!</small></p>
      </div>
    </div>
    <hr class="billig--hr" />
    <div class="pos--total--card">
      <div class="d-flex justify-content-between">
        <div><p class="pos--header">Sub Total</p></div>
        <div>
          <p class="pos--subheader">₹ {{ totalPrice }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <p class="pos--header">Tax</p>
        </div>
        <div>
          <p class="pos--subheader">₹ {{ totalTax }}</p>
        </div>
      </div>
      <hr class="pos--dot" />
      <div class="d-flex justify-content-between">
        <div><p class="pos--total--text">Total</p></div>
        <div>
          <p class="pos--total--value">₹ {{ totalPrice + totalTax }}</p>
        </div>
      </div>
    </div>
    <hr class="billig--hr" />
    <div class="pos--payment--card">
      <p class="pos--payment--header">Payment Method</p>
      <select v-model="paymentMethod" name="payment-option" id="payment-method">
        <option
          v-for="(data, index) in ['Cash', 'Debit Card', 'Credit Card']"
          :key="index"
          :value="data"
        >
          {{ data }}
        </option>
      </select>
      <div class="mt-4">
        <ButtonComponent
          label="Checkout"
          :disabled="false"
          buttonStyle="btn--primary--sm--100"
          @onClick="completeCheckOut()"
          type="button"
        />
      </div>
    </div>
  </div>
</template>
<script src="@/components/RetailerComponents/script/BillingPOS.js"></script>
<style scoped>
.pos--card {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.pos--cart--image {
  width: 80px;
  height: 80px;
  border-radius: 15px;
}
.pos--total--card {
  /* background-color: #FFFFFF; */
  margin-top: 15px;
  padding: 5px 15px;
}
.pos--card--header {
  padding: 10px;
}
.card--header {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  margin-left: 5px;
}
.billig--hr {
  margin: 0;
  border-color: #b0b0b0;
}
.product--listing {
  margin: 10px;
  max-height: 300px;
  overflow: auto;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  padding: 5px;
}
.cart--clear {
  background-color: #e3f3fd;
  color: #02a6e4;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 15px;
  font-weight: 600;
  font-size: 13px;
}
.pos--header {
  font-size: 13px;
  font-weight: 500;
  margin: 0;
}
.pos--subheader {
  font-size: 14px;
  font-weight: bolder;
  margin: 0;
}
.pos--total--text {
  font-size: 16px;
  font-weight: bolder;
  color: #000000;
}
.pos--total--value {
  font-size: 16px;
  font-weight: bolder;
  color: #33bc06;
}
.pos--dot {
  border-style: dashed;
}
.pos--payment--card {
  padding: 15px;
}
.pos--payment--header {
  font-size: 15px;
  font-weight: bolder;
}
#payment-method {
  width: 100%;
  background-color: #f1f1f1;
  height: 40px;
  border-radius: 10px;
  color: #474747;
  border: none;
  padding-left: 10px;
  font-size: 14px;
}
#payment-method:focus {
  transition: ease-in-out;
  border: 1px solid #d1d1d1;
  outline: none;
}
</style>
