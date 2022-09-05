<template>
  <p>
    {{ label }}
  </p>
  <!-- <p :class="className">
    {{ label }}
  </p> -->
</template>
<script src="@/components/script/BadgeComponent.js"></script>
<style scoped>
.badge--outline--sm {
  border-radius: 5px;
  padding: 3px 10px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  width: fit-content;
  margin: 0;
}
.badge--warning--outline {
  background-color: #fef0b9;
  color: #bc9102;
}
.badge--success--outline {
  background-color: #d0f4e8;
  color: #22a77c;
}
.badge--error--outline {
  background-color: #ffe1e7;
  color: #c44f63;
}

.badge--solid--lg {
  border-radius: 5px;
  padding: 3px 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
  margin: 0;
}
.badge--warning--solid {
  background-color: #faa338;
  color: #ffffff;
}
.badge--success--solid {
  background-color: #27bd68;
  color: #ffffff;
}
.badge--error--solid {
  background-color: #bd2727;
  color: #ffffff;
}
</style>
