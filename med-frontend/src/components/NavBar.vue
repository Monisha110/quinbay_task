<template>
  <nav class="navbar navbar-expand-lg" id="NavBar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/admin-logo.png"
          alt=""
          width="200"
          v-if="NavBarData.role === 'ADMIN'"
        />
        <img
          src="@/assets/dealer-logo.png"
          alt=""
          width="200"
          v-else-if="NavBarData.role === 'DEALER'"
        />
        <img
          src="@/assets/retailer-logo.png"
          alt=""
          width="200"
          v-else-if="NavBarData.role === 'RETAILER'"
        />
      </a>
      <button
        class="navbar-toggler btn--toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-4">
            <BadgeComponent
              :label="'Name : ' + user.username"
              class="badge--success--outline badge--outline--sm"
            />
          </li>
          <li
            class="nav-item me-4"
            v-for="(data, index) in NavBarData.routes"
            :key="index"
          >
            <router-link :to="{ name: data.name }" class="nav--link">{{
              data.label
            }}</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <ButtonComponent
            label="Logout"
            class="btn--primary"
            @onClick="logout()"
            type="button"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
<script src="@/components/script/NavBar.js"></script>
<style scoped>
#NavBar {
  box-shadow: 0 5px 20px rgb(0 41 112 / 10%);
  background-color: #ffffff;
}
.nav--link {
  color: black;
  text-decoration: none;
}
.btn--toggle {
  border: none;
  outline: none;
  background-color: transparent;
}

@media screen and (max-width: 600px) {
  .nav-item {
    margin: 10px 10px 0px 10px !important;
  }
}
</style>
