<template>
  <div class="spinner--outer">
    <div class="spinner--inner"></div>
  </div>
</template>
<script src="@/components/script/SpinnerProgress.js"></script>
<style>
.spinner--outer {
  width: fit-content;
  margin: auto;
  vertical-align: middle;
}
.spinner--inner {
  background-color: transparent;
  border: 5px solid #cdcdcd;
  border-top: 5px solid #02a6e4;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
