<template>
  <div class="">
    <div class="inventory--table--search">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-4 mb-2 mb-lg-0">
          <p class="table--header">
            Total Items
            <span class="total--client--badge"
              >{{ inventoryList.length }} products</span
            >
          </p>
        </div>
        <div class="col-12 col-lg-8">
          <div class="row justify-content-end align-items-center gx-2">
            <div class="col-12 col-sm-8 col-md-5 mb-2 mb-md-0">
              <input
                type="text"
                v-model="searchText"
                class="action--input"
                placeholder="Search product"
              />
            </div>
            <div class="col-6 col-sm-4 col-md-2 mb-2 mb-md-0">
              <ButtonComponent
                label="Search"
                class="btn--black--outline"
                @onClick="searchName()"
                type="button"
              />
            </div>
            <div class="col-6 col-sm-6 col-md-2 mb-2 mb-md-0">
              <ButtonComponent
                label="Clear"
                class="btn--primary--sm--outline--100"
                @onClick="clearSearch()"
                type="button"
              />
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
              <ButtonComponent
                label="Add Product"
                class="btn--primary--sm--100"
                @onClick="addNewProduct()"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inventory--table">
      <div class="table-responsive">
        <table class="table table-sm table-borderless">
          <thead>
            <tr class="table--tr">
              <th>S.No</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>MRP</th>
              <th>Tax</th>
              <th>Availability</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- <InventoryTableList v-for="(data,index) in userList" :key="index"/> -->
            <InventoryTableList
              v-for="(data, index) in inventoryList"
              :key="index"
              :product="data"
              :index="index"
              @activateModal="toggleConfirmModal"
              @sendDataToEditModal="selectedProductFromList"
            />
          </tbody>
        </table>
      </div>
    </div>
    <Transition>
      <ConfirmModal
        v-if="showConfirmModal"
        modalTitle="Confirm Production Status!"
        modalAction="Change Production Status"
        :undo="true"
        @closeAction="closeConfirmModal"
        @confirmAction="confirmActionCall"
      />
      <InventoryActionModal
        v-if="showActionModal"
        :modalObjectData="selectedProduct"
        @closeAction="closeActionModal"
        @saveAction="saveActionCall"
      />
    </Transition>
  </div>
</template>
<script src="@/components/AdminComponents/script/InventoryTable.js"></script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.inventory--table--search {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 10px;
  padding: 10px;
}

.inventory--table {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  /* padding: 5px; */
  max-height: 550px;
  overflow: scroll;
}
.inventory--table--header {
  /* background-color: #FAFBFC; */
}

.total--client--badge {
  padding: 3px 10px;
  font-size: 11px;
  border-radius: 10px;
  background-color: #dddddd7e;
  margin-left: 10px;
}

.table--header {
  font-size: 17px;
  font-weight: 700;
  margin: 0;
}

.table--tr {
  border-bottom: 1px solid #cbcbcb;
}

.table--tr > th {
  padding-left: 15px;
  padding-top: 10px;
  font-size: 13px;
  color: #8d8d8d;
  font-weight: 500;
}

.action--input {
  width: 100%;
  height: 37px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  padding-left: 10px;
  outline: none;
}
.action--input:focus {
  border: 1px solid #02a6e4;
}

.action--input::placeholder {
  font-size: 14px;
}
</style>
