<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-11 col-sm-8 col-md-7 col-lg-5 col-xl-4">
        <div class="login--card">
          <img src="@/assets/logo.png" alt="" width="180" />
          <p class="login--header--text">Login into your account!</p>
          <div class="action--form--controller">
            <label for="user-name" class="action--input--label">Username</label>
            <input
              type="text"
              v-model="user.username"
              class="action--input"
              placeholder="Enter Your Username"
            />
          </div>
          <p class="news--error" v-if="usernameValidation">
            Special Characters and white spaces are not allowed!
          </p>
          <div class="action--form--controller">
            <label for="user-password" class="action--input--label"
              >Password</label
            >
            <input
              type="password"
              v-model="user.password"
              class="action--input"
              placeholder="Enter Your Password"
            />
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col-12">
              <ButtonComponent
                label="Login"
                :disabled="!(validateFormEntry && !usernameValidation)"
                :class="
                  validateFormEntry && !usernameValidation
                    ? 'btn--primary'
                    : 'btn--disabled'
                "
                @onClick="authenticate()"
                type="button"
              />
            </div>
          </div>
          <div>
            <p class="terms--cover--label">
              By signing in, I agree to the ReadyMed Terms and Conditions,
              Privacy Statement and ReadyMed Rewards Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/views/script/LoginPage.js"></script>
<style scoped>
.login--card {
  margin-top: 30%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 25px;
}

.login--header--text {
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 20px;
}

.news--text {
  color: #01a0d1;
}

.news--error {
  color: #e70000;
  font-size: 13px;
}

.login--field--label {
  font-size: 18px;
}

.terms--cover--label {
  font-size: 13px;
  margin-top: 30px;
  color: #656565;
}

.action--input--label {
  font-size: 14px;
  font-weight: 500;
}
.action--input {
  width: 100%;
  height: 45px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin-top: 5px;
  padding-left: 10px;
  outline: none;
}
.action--input:focus {
  border: 1px solid #02a6e4;
}

.action--input::placeholder {
  font-size: 14px;
}

.action--form--controller {
  margin-bottom: 15px;
}
</style>
