<template>
  <div class="">
    <div class="user--table--search">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <p class="table--header">
            Total Franchise
            <span class="total--client--badge"
              >{{ userList.length }} users</span
            >
          </p>
        </div>
        <div class="col-12 col-md-6">
          <div class="row justify-content-end align-items-center gx-2">
            <div class="col-12 col-md-6 mb-2 mb-md-0">
              <input
                type="text"
                v-model="searchText"
                class="action--input"
                placeholder="Search user..."
              />
            </div>
            <div class="col-6 col-md-3">
              <ButtonComponent
                label="Search"
                class="btn--primary--sm--outline--100"
                @onClick="searchName()"
                type="button"
              />
            </div>
            <div class="col-6 col-md-3">
              <ButtonComponent
                label="Clear"
                class="btn--danger--sm--outline--100"
                @onClick="clearSearch()"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user--table">
      <div class="loader--default--area" v-if="userList.length === 0">
        <!-- <SpinnerProgress /> -->
        <p class="mt-4 text-center">
          <small>No records found</small>
        </p>
      </div>
      <div class="table-responsive" v-else>
        <table class="table table-sm table-borderless">
          <thead>
            <tr class="table--tr">
              <th>S.no</th>
              <th>Name</th>
              <th>Username</th>
              <th>Created</th>
              <th>Status</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <UserTableList
              v-for="(data, index) in userList"
              :key="index"
              :user="data"
              :index="index"
              @activateModal="toggleConfirmModal"
              @editModal="toggleEditModal"
            />
          </tbody>
        </table>
      </div>
    </div>
    <Transition>
      <ConfirmModal
        v-if="showConfirmModal"
        modalTitle="Confirm Action"
        modalAction="Modify the user account"
        :undo="true"
        @closeAction="closeConfirmModal"
        @confirmAction="confirmActionCall"
      />
      <UserEditModal
        v-if="showEditModal"
        modalTitle="Edit User Information"
        modalAction="Save"
        :userInfo="userObjToEdit"
        @closeAction="closeEditModal"
        @saveAction="saveActionCall"
      />
    </Transition>
  </div>
</template>
<script src="@/components/AdminComponents/script/UserTable.js"></script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.user--table--search {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 10px;
  padding: 10px;
}

.loader--default--area {
  margin-top: 25%;
}

.user--table {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  /* padding: 5px; */
  height: 550px;
  overflow: scroll;
}
.user--table--header {
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
