<template>
  <div
    @click="selectRequest(requestData)"
    :class="[
      'request--card',
      requestData.status === 'APPROVED'
        ? 'request--approved--card'
        : requestData.status === 'DENIED'
        ? 'request--denied--card'
        : 'request--pending--card',
    ]"
  >
    <div class="row">
      <div class="col-12">
        <font-awesome-icon
          :icon="[
            'fa-solid',
            requestData.status === 'APPROVED'
              ? 'fa-circle-check'
              : requestData.status === 'DENIED'
              ? 'fa-circle-xmark'
              : 'fa-circle-exclamation',
          ]"
          :class="[
            requestData.status === 'APPROVED'
              ? 'approved--icon'
              : requestData.status === 'DENIED'
              ? 'denied--icon'
              : 'pending--icon',
          ]"
        />
      </div>
      <div class="col-12">
        <p class="order--id--text">REQUEST ID: {{ requestData.id }}</p>
        <p class="order--id--company--name">{{ requestData.senderName }}</p>
      </div>
      <div class="col-12 mt-2">
        <BadgeComponent
          :label="requestData.status"
          :class="[
            requestData.status === 'APPROVED'
              ? 'badge--success--solid'
              : requestData.status === 'DENIED'
              ? 'badge--error--solid'
              : 'badge--warning--solid',
            'badge--solid--lg',
          ]"
        />
      </div>
    </div>
  </div>
</template>
<script src="@/components/script/RequestStepperCard.js"></script>
<style scoped>
.request--card:hover {
  cursor: pointer;
}

.request--approved--card {
  background-color: #f0fcf6;
  border-radius: 8px;
  border: 1px solid #ceece4;
  margin-bottom: 15px;
  padding: 12px;
}
.request--pending--card {
  background-color: #fcf9f0;
  border-radius: 8px;
  border: 1px solid #ece5ce;
  margin-bottom: 15px;
  padding: 12px;
}
.request--denied--card {
  background-color: #fcf0f0;
  border-radius: 8px;
  border: 1px solid #eccece;
  margin-bottom: 15px;
  padding: 12px;
}
.approved--icon {
  color: #27bd68;
  font-size: 30px;
}
.pending--icon {
  color: #faa338;
  font-size: 30px;
}
.denied--icon {
  color: #bd2727;
  font-size: 30px;
}
.order--id--text {
  margin: 0;
  font-size: 12px;
  color: #999999;
  font-weight: 500;
  margin-top: 5px;
}
.order--id--company--name {
  margin: 0;
  font-size: 15px;
  color: #000000;
}
</style>
