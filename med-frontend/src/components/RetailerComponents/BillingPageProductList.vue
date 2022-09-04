<template>
  <div>
    <div class="product--card">
      <img
        :src="product.productDetail.imageUrl"
        class="product--image"
        alt="product"
      />
      <div class="row text-center mt-4">
        <div class="col-12">
          <p class="product--name">{{ product.productDetail.name }}</p>
          <p class="product--price">₹ {{ product.productDetail.price }}</p>
          <p class="product--price">Quantity: {{ product.stockInHand }}</p>
        </div>
      </div>
      <!-- <div class="d-flex justify-content-between align-items-end">
                    <div class="">
                        <p class="product--price"></p>
                    </div>
                    <div class="">
                        <img :src="product.image" class="product--image" alt="product">
                    </div>
                </div> -->
      <div class="mt-3 mx-auto" v-if="true">
        <ButtonComponent
          label="Add to Bag"
          buttonStyle="btn--primary--sm--outline"
          @onClick="addToCart(product)"
          type="button"
        />
      </div>
      <div v-else class="mx-auto">
        <BadgeComponent label="Out of Stock" />
      </div>
    </div>
  </div>
</template>
<script src="@/components/RetailerComponents/script/BillingPageProductList.js"></script>
<style scoped>
.inventory--single--list {
  margin: 0;
  border: 0.5px solid #999999;
}
.pos--product--list {
  margin: 5px;
  font-size: 15px;
}
.product--card {
  background-color: #ffffff;
  border: 0.3px solid #eaeaea;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  border-radius: 15px;
  padding: 15px;
  /* margin-bottom: 20px; */
  display: flex;
  flex-direction: column;
  min-height: 100px;
  /* max-height: ; */
  justify-content: space-between;
}
.product--name {
  color: #000000;
  font-weight: 800;
  font-size: 17px;
  margin: 0px;
}
.product--price {
  font-size: 15px;
  color: #747474;
  margin: 0px;
  font-weight: 500;
}
.product--image {
  width: 100%;
  max-height: 150px;
  border-radius: 15px;
}
</style>
