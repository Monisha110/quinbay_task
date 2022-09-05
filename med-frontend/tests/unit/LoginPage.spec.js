import { shallowMount } from "@vue/test-utils";

import LoginPage from "@/views/script/LoginPage";

describe("LoginPage", () => {
  let component;
  beforeEach(() => {
    component = shallowMount(LoginPage, {});
  });

  it("Validate User", () => {
    console.log(component.vm);
    component.vm.user.username = "admin";
    component.vm.user.password = "admin";
    component.vm.authenticate();
    // component.vm.validate = true;

    component.vm.user.username = "admin";
    component.vm.user.password = "password";
    component.vm.authenticate();
    // component.vm.validate = false;
  });

  it("Compute validateFormEntry", () => {
    component.vm.user.username = "";
    component.vm.user.password = "";
    component.vm.validateFormEntry;

    component.vm.user.username = "admin123";
    component.vm.user.password = "password";
    component.vm.validateFormEntry;
  });

  it("usernameValidation", () => {
    component.vm.user.username = "admin123$%";
    component.vm.usernameValidation;

    component.vm.user.username = "admin";
    component.vm.usernameValidation;
  });
});
