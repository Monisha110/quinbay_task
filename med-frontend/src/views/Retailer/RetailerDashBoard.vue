<template>
  <div>
    <div class="container-fluid mt-5">
      <div class="row px-3">
        <div class="col-12 col-md-6 col-lg-5 col-xl-3 mt-2">
          <div class="fixed--col">
            <BillingPOS />
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-7 col-xl-9 mt-2">
          <BillingPageProductArea />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/views/Retailer/script/RetailerDashBoard.js"></script>
<style scoped>
.fixed--col {
  position: sticky;
  top: 5%;
}
</style>
