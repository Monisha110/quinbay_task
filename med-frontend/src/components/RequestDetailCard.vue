<template>
  <div class="request--detail--card">
    <div v-if="requestData && requestData.id">
      <p class="request--id">REQUEST ID: {{ requestData.id }}</p>
      <div class="request--detail--body">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <p class="request--text--header">Customer Name:</p>
            <p class="request--text--description">
              {{ requestData.senderName }}
            </p>
          </div>
          <div class="col-auto">
            <BadgeComponent
              :label="requestData.status"
              :class="[
                requestData.status === 'APPROVED'
                  ? 'badge--success--solid'
                  : requestData.status === 'DENIED'
                  ? 'badge--error--solid'
                  : 'badge--warning--solid',
                'badge--outline--sm',
              ]"
            />
          </div>
        </div>

        <p class="request--text--header">Request Date:</p>
        <p class="request--text--description">
          {{ toDateString(requestData.createdAt) }}
        </p>
        <p class="request--text--header mt-4">Requested Quantity:</p>
        <p class="request--text--description">
          {{ requestData.requestedQuantity }}
        </p>

        <p class="request--text--header mt-4 mb-2">Request Information:</p>
        <p class="request--text--description">
          <b>Product Id:</b> {{ requestData.product.id }}
        </p>
        <p class="request--text--description">
          <b>Product Name:</b> {{ requestData.product.name }}
        </p>
        <p class="request--text--description">
          <b>Product Description:</b> {{ requestData.product.description }}
        </p>
        <p class="request--text--description">
          <b>Product Price:</b> ₹{{ requestData.product.price }}
        </p>
        <p class="request--text--description">
          <b>Product Tax:</b> ₹{{ requestData.product.tax }}
        </p>
      </div>
      <div
        class="request--detail--footer"
        v-if="requestData.status === 'PENDING'"
      >
        <div class="row justify-content-end align-items-center g-2">
          <div class="col-3">
            <ButtonComponent
              label="Reject"
              class="btn--black--outline"
              @onClick="denyRequest()"
              type="button"
            />
          </div>
          <div class="col-3">
            <ButtonComponent
              label="Approve"
              class="btn--black"
              @onClick="approveRequest()"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="request--notfound" v-else>
      <p class="select--request">Select any request from left!</p>
    </div>
  </div>
</template>
<script src="@/components/script/RequestDetailCard.js"></script>
<style scoped>
.request--detail--card {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 15px;
  padding: 12px;
  height: 555px;
  overflow-y: scroll;
}
.select--request {
  color: #999999;
  font-size: 15px;
  text-align: center;
  margin-top: 20%;
}
.request--detail--body {
  background-color: #fafbfc;
  border-radius: 8px;
  border: 1px solid rgb(209, 213, 216);
  margin-bottom: 15px;
  padding: 12px;
  height: 430px;
  overflow: scroll;
}
.request--id {
  font-size: 14px;
  color: #353535;
  font-weight: 700;
  margin-top: 8px;
}
.request--text--header {
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
}
.request--text--description {
  font-size: 13px;
  color: #5b5b5b;
  font-weight: 500;
  margin: 0px;
}
</style>
