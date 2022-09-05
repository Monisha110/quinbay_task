<template>
  <div class="row">
    <div class="col-12 mb-3">
      <p class="navigation--label">Admin / User Management</p>
    </div>
    <div class="col-12 col-lg-3 px-2 mb-2">
      <UserAddSection />
    </div>
    <div class="col-12 col-lg-9 px-2">
      <UserTable />
    </div>
  </div>
</template>
<script src="@/views/Admin/script/AdminUserManagement.js"></script>
<style scoped>
.navigation--label {
  margin: 0;
  font-size: 14px;
  margin-left: 10px;
  color: #999999;
}
</style>
