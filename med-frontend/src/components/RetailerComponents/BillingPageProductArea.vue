<template>
  <div>
    <div class="search--card">
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-md-12 col-lg-8 mt-2 mt-lg-0">
          <input
            type="text"
            class="search--bar"
            v-model="searchKey"
            placeholder="Search Product"
          />
        </div>
        <div class="col-6 col-md-6 col-lg-2 my-2 px-lg-0">
          <ButtonComponent
            label="Search"
            class="btn--primary--sm--100"
            @onClick="searchForProduct()"
            type="button"
          />
        </div>
        <div class="col-6 col-md-6 col-lg-2 my-2 ps-2">
          <ButtonComponent
            label="Clear"
            class="btn--black--outline"
            @onClick="clearSearch()"
            type="button"
          />
        </div>
      </div>
    </div>
    <div class="my-3">
      <div class="row g-3">
        <BillingPageProductList
          class="col-12 col-md-12 col-lg-6 col-xl-4"
          v-for="(data, index) in productList"
          :key="index"
          :product="data"
          @addToCart="addToCart(data)"
        />
      </div>
    </div>
  </div>
</template>
<script src="@/components/RetailerComponents/script/BillingPageProductArea.js"></script>
<style scoped>
.search--card {
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1px 10px;
  border-radius: 10px;
}
.search--bar {
  background-color: #f1f1f1;
  border: 0.7px solid #e2e2e2;
  height: 40px;
  margin: 0;
  border-radius: 10px;
  padding-left: 10px;
  width: 100%;
}
.search--bar::placeholder {
  font-size: 14px;
}
.search--bar:focus {
  border: 1px solid #cdcdcd;
  outline: none;
}
</style>
