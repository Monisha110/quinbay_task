<template>
  <div class="card--align">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <v-lottie-player
          name="notfound"
          class="mx-auto"
          loop
          height="450px"
          width="450px"
          :animationData="require('@/assets/lottie/notfound.json')"
        />
      </div>
    </div>
  </div>
</template>
<script src="@/views/HelperPages/script/NotFound.js"></script>
<style scoped>
.card--align {
  margin-top: 10%;
}
</style>
