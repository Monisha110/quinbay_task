<template>
  <div class="">
    <div class="inventory--table--search">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-4">
          <p class="table--header">
            Request History
            <span class="total--client--badge"
              >{{ dealerRequestHistory.length }} request</span
            >
          </p>
        </div>
        <!-- <div class="col-12 col-md-6">
          <div class="row justify-content-end align-items-center gx-2">
            <div class="col-6">
              <input
                type="text"
                v-model="searchText"
                class="action--input"
                placeholder="Search product"
              />
            </div>
            <div class="col-auto">
              <ButtonComponent
                label="Search"
                buttonStyle="btn--black--outline"
                @onClick="searchName()"
                type="button"
              />
            </div>
            <div class="col-auto">
              <ButtonComponent
                label="Clear"
                buttonStyle="btn--primary--sm--outline"
                @onClick="clearSearch()"
                type="button"
              />
            </div>
            <div class="col-auto">
              <ButtonComponent
                label="Add Product"
                buttonStyle="btn--primary--sm"
                @onClick="addNewProduct()"
                type="button"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="inventory--table">
      <div class="table-responsive">
        <table class="table table-sm table-borderless">
          <thead>
            <tr class="table--tr">
              <th>S.No</th>
              <th>Date</th>
              <th>Product Name</th>
              <th>Requested Quantity</th>
              <th>Price + Tax</th>
              <th>Status</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <RequestHistoryTableList
              v-for="(data, index) in dealerRequestHistory"
              :key="index"
              :request="data"
              :index="index"
              @activateModal="toggleConfirmModal"
              @sendDataToEditModal="selectedProductFromList"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script src="@/components/DealerComponents/script/RequestHistoryTable.js"></script>
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
