<template>
  <div>
    <div class="row">
      <div class="col-12 mb-3">
        <p class="navigation--label">Dealer / Inventory</p>
      </div>
      <div class="col-12 px-2">
        <RequestHistoryTable />
      </div>
    </div>
  </div>
</template>
<script src="@/views/Dealer/script/DealerRequestHistory.js"></script>
<style scoped>
.navigation--label {
  margin: 0;
  font-size: 14px;
  margin-left: 10px;
  color: #999999;
}
</style>
