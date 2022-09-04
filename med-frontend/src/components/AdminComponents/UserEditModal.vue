<template>
  <div class="modal--bg">
    <div class="modal--content">
      <div class="modal--body">
        <p class="modal--header">Edit User Information</p>

        <div class="select--label">
          <div class="row m-0">
            <div class="col p-0 pe-2">
              <p
                :class="[
                  isUserNameUpdate
                    ? 'update--label--active'
                    : 'update--label--inactive',
                  'active--pointer',
                ]"
                @click="toggleOptionChange"
              >
                Edit Name
              </p>
            </div>
            <div class="col p-0 ps-2">
              <p
                :class="[
                  !isUserNameUpdate
                    ? 'update--label--active'
                    : 'update--label--inactive',
                  'active--pointer',
                ]"
                @click="toggleOptionChange"
              >
                Change Password
              </p>
            </div>
          </div>
        </div>
        <div v-if="isUserNameUpdate">
          <div class="action--form--controller">
            <label for="user-password" class="action--input--label"
              >Full Name</label
            >
            <input
              type="text"
              class="action--input"
              v-model="userData.name"
              placeholder="Enter Password"
            />
          </div>
          <p class="modal--danger" v-if="checkNameLength">
            Name should be greater than 4 letters!
          </p>
          <p class="modal--subheader">
            By changing the name will reflect in all entity for both
            <b>(Dealer and Retailer)</b>.
          </p>
        </div>
        <div v-else>
          <div class="action--form--controller">
            <label for="user-password" class="action--input--label"
              >Password</label
            >
            <input
              type="password"
              v-model="userData.password"
              class="action--input"
              placeholder="Enter Password"
            />
          </div>
          <div class="action--form--controller">
            <label for="user-confirm-password" class="action--input--label">
              Confirm Password</label
            >
            <input
              type="password"
              v-model="confirmPassword"
              class="action--input"
              placeholder="Re Enter Password"
            />
          </div>
          <p class="modal--danger" v-if="activatePasswordMatchError">
            Password doesn't match.
          </p>
        </div>
      </div>
      <div class="modal--footer">
        <div class="row">
          <div class="col-6 pe-1">
            <ButtonComponent
              label="Close"
              buttonStyle="btn--black--outline"
              @onClick="closeAction()"
              type="button"
            />
          </div>
          <div class="col-6 ps-1">
            <ButtonComponent
              label="Save"
              :disabled="!isButtonEnabled"
              :buttonStyle="[isButtonEnabled ? 'btn--black' : 'btn--disabled']"
              @onClick="confirmAction()"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/components/AdminComponents/script/UserEditModal.js"></script>
<style scoped>
.modal--bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.629);
}
.modal--content {
  background-color: #fefefe;
  margin: 5% auto;
  /* padding: 20px; */
  border: 1px solid #888;
  width: 30%;
  min-height: 380px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal--footer {
  /* border-top: 1px solid rgb(202, 202, 202); */
  padding: 10px 20px;
  margin-bottom: 10px;
}
.modal--body {
  padding: 10px 20px;
  /* text-align: center; */
}

.select--label {
  background-color: #e4e4e4c3;
  padding: 4px;
  border-radius: 15px;
}

.update--label--active {
  background-color: #000000;
  border-radius: 15px;
  color: #ffffff;
  font-size: 12px;
  margin: 0;
  padding: 3px 10px;
  text-align: center;
}

.update--label--inactive {
  border-radius: 15px;
  color: #000000;
  font-size: 12px;
  margin: 0;
  padding: 3px 10px;
  text-align: center;
}

.active--pointer {
  cursor: pointer;
}

.modal--header {
  font-size: 17px;
  font-weight: 700;
  margin-top: 15px;
  /* margin-bottom: 15px; */
}

.modal--subheader {
  margin: 0;
  margin-top: 20px;
  font-size: 12px;
  color: rgb(133, 133, 133);
}

.modal--danger {
  margin: 0;
  margin-top: 10px;
  font-size: 12px;
  color: rgb(195, 0, 0);
}

.action--input--label {
  font-size: 13px;
  font-weight: 500;
}
.action--input {
  width: 100%;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin-top: 5px;
  padding-left: 10px;
  outline: none;
  font-size: 13px;
}

select {
  color: #656565;
}

.action--input:focus {
  border: 1px solid #000000;
}

.action--input::placeholder {
  font-size: 14px;
}

.action--form--controller {
  margin-bottom: 10px;
  margin-top: 15px;
}
</style>
