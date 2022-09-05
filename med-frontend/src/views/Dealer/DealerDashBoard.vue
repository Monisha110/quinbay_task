<template>
  <div>
    <div class="row">
      <div class="col-12 mb-3">
        <p class="navigation--label">Dealer / Dashboard</p>
      </div>
    </div>
    <div class="row align-items-center justify-center-between">
      <div class="col-12 col-md-4 px-2 d-none d-md-block">
        <!-- <InventoryTable/> -->
        <v-lottie-player
          name="notfound"
          class="mx-auto"
          loop
          height="400px"
          width="400px"
          :animationData="require('@/assets/lottie/dashboard.json')"
        />
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-12">
            <div class="request--search--box">
              <div class="row justify-content-between align-items-center">
                <div class="col-12 col-md-4 mb-2 mb-md-0">
                  <p class="table--header">
                    Request Information
                    <span class="total--client--badge"
                      >{{ requestList.length }} Request</span
                    >
                  </p>
                </div>
                <div class="col-12 col-md-6">
                  <div class="row justify-content-end align-items-center gx-2">
                    <div class="col-6">
                      <input
                        type="text"
                        v-model="searchRequestKey"
                        class="action--input"
                        placeholder="Search Request Id"
                      />
                    </div>
                    <div class="col-3 col-md-auto">
                      <ButtonComponent
                        label="Search"
                        class="btn--primary--sm--outline"
                        @onClick="searchFilter()"
                        type="button"
                      />
                    </div>
                    <div class="col-3 col-md-auto">
                      <ButtonComponent
                        label="Clear"
                        class="btn--danger--sm--outline"
                        @onClick="confirmAction()"
                        type="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="action--form--controller">
              <select class="action--input" v-model="searchStatusKey">
                <option value="">Select Request Status</option>
                <option value="APPROVED">Approved</option>
                <option value="PENDING">Pending</option>
                <option value="DENIED">Denied</option>
              </select>
            </div>
            <div class="stepper--list--card">
              <RequestStepperCard
                v-for="(data, index) in requestList"
                :requestData="data"
                @sendDataToDetailTab="switchSelectedProduct"
                :key="index"
                :index="index"
              />
            </div>
          </div>
          <div class="col-12 col-md-8">
            <RequestDetailCard
              :requestData="requestList[selectedIndex]"
              @approveRequest="activateApproveRequestModal"
              @denyRequest="activateDenyRequestModal"
            />
          </div>
        </div>
      </div>
    </div>
    <Transition>
      <RequestActionModal
        v-if="showRequestActionModal"
        :requestModalData="requestModalData"
        @closeAction="closeRequestActionModal"
        @saveAction="saveActionCall"
      />
    </Transition>
  </div>
</template>
<script src="@/views/Dealer/script/DealerDashBoard.js"></script>
<style scoped>
.request--search--box {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 10px;
  padding: 10px;
}

.navigation--label {
  margin: 0;
  font-size: 14px;
  margin-left: 10px;
  color: #999999;
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

.select--request--text {
  color: #656565;
}

.action--input {
  width: 100%;
  height: 37px;
  background-color: #f1f1f1;
  border-radius: 10px;
  color: #313131;
  font-size: 14px;
  border: 1px solid #f1f1f1;
  padding-left: 10px;
  outline: none;
}
.action--input:focus {
  border: 1px solid #c5c5c5;
}

.action--input--label {
  font-size: 13px;
  font-weight: 500;
}

select {
  color: #656565 !important;
  font-size: 13px;
}

.action--input::placeholder {
  font-size: 13px;
}

.action--form--controller {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 10px;
  padding: 8px;
}

.stepper--list--card {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 10px;
  padding: 15px 15px;
  height: 490px;
  overflow-y: scroll;
}

.stepper--list--card::-webkit-scrollbar {
  width: 5px;
}

.stepper--list--card::-webkit-scrollbar-thumb {
  background-color: #e6e6e6 !important;
  width: 5px;
  border-radius: 10px;
}
</style>
