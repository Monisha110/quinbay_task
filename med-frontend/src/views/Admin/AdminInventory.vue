<template>
  <div>
    <div class="row">
      <div class="col-12 mb-3">
        <p class="navigation--label">Admin / Inventory</p>
      </div>
      <div class="col-12 px-2">
        <InventoryTable />
      </div>
    </div>
  </div>
</template>
<script src="@/views/Admin/script/AdminInventory.js"></script>
<style scoped>
.navigation--label {
  margin: 0;
  font-size: 14px;
  margin-left: 10px;
  color: #999999;
}
</style>
