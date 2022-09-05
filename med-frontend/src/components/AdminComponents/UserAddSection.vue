<template>
  <div class="user--create--card">
    <p class="user--create--header--text">Create New User!</p>
    <div class="action--form--controller">
      <label for="user-name" class="action--input--label">Full Name</label>
      <input
        type="text"
        v-model="user.name"
        class="action--input"
        placeholder="Enter Name"
      />
    </div>
    <p class="news--error" v-if="nameValidation">
      Special Characters and white spaces are not allowed!
    </p>
    <div class="action--form--controller">
      <label for="user-name" class="action--input--label">Username</label>
      <input
        type="text"
        v-model="user.username"
        class="action--input"
        placeholder="Enter Username"
      />
    </div>
    <p class="news--error" v-if="usernameValidation">
      Special Characters and white spaces are not allowed!
    </p>
    <div class="action--form--controller">
      <label for="user-password" class="action--input--label">Password</label>
      <input
        type="password"
        v-model="user.password"
        class="action--input"
        placeholder="Enter Password"
      />
    </div>
    <div class="action--form--controller">
      <label for="user-password" class="action--input--label">User Type</label>
      <select v-model="user.role" class="action--input">
        <option :value="null">Select the User role</option>
        <!-- <option value="ADMIN">Admin</option> -->
        <option value="DEALER">Dealer</option>
        <option value="RETAILER">Retailer</option>
      </select>
    </div>
    <div class="row justify-content-start mt-4">
      <div class="col-12">
        <ButtonComponent
          label="Create Account"
          :loader="true"
          :disabled="!validateField"
          :class="validateField ? 'btn--primary' : 'btn--disabled'"
          @onClick="createNewUserAccount()"
          type="button"
        />
      </div>
    </div>
    <div>
      <p class="terms--cover--label">
        Complete every fields to create new user account.
      </p>
    </div>
  </div>
</template>
<script src="@/components/AdminComponents/script/UserAddSection.js"></script>
<style scoped>
.user--create--card {
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgb(209, 213, 216);
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  padding: 25px 20px;
}

.user--create--header--text {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.news--text {
  color: #01a0d1;
}

.news--error {
  color: #e70000;
  font-size: 13px;
}

.user--create--field--label {
  font-size: 18px;
}

.terms--cover--label {
  font-size: 13px;
  margin-top: 30px;
  color: #656565;
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
  border: 1px solid #02a6e4;
}

.action--input::placeholder {
  font-size: 13px;
}

.action--form--controller {
  margin-bottom: 10px;
}
</style>
