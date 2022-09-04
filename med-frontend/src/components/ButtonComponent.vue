<template>
  <button
    :type="type"
    @click="onClick()"
    :class="buttonStyle"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
<script src="@/components/script/ButtonComponent.js"></script>
<style scoped>
.btn--primary {
  color: white;
  border: 1px solid #02a6e4;
  outline: none;
  width: 100%;
  /* height: 35px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #02a6e4;
}
.btn--primary--outline {
  color: #02a6e4;
  border: 1px solid #02a6e4;
  width: 100%;
  /* height: 35px; */
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #ffffff;
}

.btn--black {
  color: rgb(255, 255, 255);
  border: 1px solid #000000;
  /* border: none; */
  outline: none;
  width: 100%;
  /* height: 35px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 15px;
  background-color: #000000;
}
.btn--black--outline {
  color: #000000;
  border: 1px solid #000000;
  width: 100%;
  /* height: 35px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;

  height: 35px;

  background-color: #ffffff;
}

.btn--danger {
  color: white;
  border: 1px solid #ffffff;
  border: none;
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #dc3545;
}

.btn--primary--sm--100 {
  color: #ffffff;
  border: 1px solid #02a6e4;
  outline: none;
  width: 100%;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #02a6e4;
}

.btn--disabled--sm--100 {
  color: white;
  border: 1px solid #ffffff;
  outline: none;
  width: 100%;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #dfdfdf;
}

.btn--primary--sm {
  color: #ffffff;
  border: 1px solid #02a6e4;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #02a6e4;
}

.btn--primary--sm--outline {
  color: #02a6e4;
  border: 1px solid #02a6e4;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #ffffff;
}

.btn--delete--sm {
  color: #ffffff;
  border: 1px solid #000000;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  min-width: 80%;
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #000000;
}

.btn--edit--sm {
  color: rgb(0, 0, 0);
  border: 1px solid #000000;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #ffffff;
}

.btn--danger--sm--outline {
  color: #dc3545;
  border: 1px solid #dc3545;
  outline: none;
  /* width: 100%; */
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #ffffff;
}

.btn--secondary {
  color: white;
  border: 1px solid #ffffff;
  border: none;
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #a4a4a4;
}
.btn--disabled {
  color: white;
  border: 1px solid #ffffff;
  /* border: none; */
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 15px;
  background-color: #dfdfdf;
}

.btn--disabled--sm {
  color: white;
  border: 1px solid #ffffff;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #dfdfdf;
}
</style>
