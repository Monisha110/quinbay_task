<template>
  <div class="modal--bg">
    <div class="modal--content">
      <div class="modal--body">
        <p class="modal--header">{{ modalHeader }}</p>

        <p class="request--text--header">Product Name:</p>
        <p class="request--text--description">{{ product.name }}</p>

        <div class="action--form--controller">
          <label for="user-quantity" class="action--input--label"
            >Product Quantity</label
          >
          <input
            type="number"
            class="action--input"
            v-model="product.quantity"
            placeholder="Enter Quanity to request"
          />
        </div>
      </div>
      <div class="modal--footer">
        <div class="row">
          <div class="col-6 pe-1">
            <ButtonComponent
              label="Close"
              class="btn--black--outline"
              @onClick="closeAction()"
              type="button"
            />
          </div>
          <div class="col-6 ps-1">
            <ButtonComponent
              :label="modalButtonLabel"
              class="btn--black"
              @onClick="confirmAction()"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/components/DealerComponents/script/BuyRequestModal.js"></script>
<style scoped>
.modal--bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.629);
}
.modal--content {
  background-color: #fefefe;
  margin: 5% auto;
  /* padding: 20px; */
  border: 1px solid #888;
  width: 30%;
  min-height: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal--footer {
  /* border-top: 1px solid rgb(202, 202, 202); */
  padding: 10px 20px;
  margin-bottom: 10px;
}
.modal--body {
  padding: 10px 20px;
  /* text-align: center; */
}

.select--label {
  background-color: #e4e4e4c3;
  padding: 4px;
  border-radius: 15px;
}

.update--label--active {
  background-color: #000000;
  border-radius: 15px;
  color: #ffffff;
  font-size: 12px;
  margin: 0;
  padding: 3px 10px;
  text-align: center;
}

.update--label--inactive {
  border-radius: 15px;
  color: #000000;
  font-size: 12px;
  margin: 0;
  padding: 3px 10px;
  text-align: center;
}

.active--pointer {
  cursor: pointer;
}

.modal--header {
  font-size: 17px;
  font-weight: 700;
  margin-top: 15px;
  /* margin-bottom: 15px; */
}

.modal--subheader {
  margin: 0;
  margin-top: 20px;
  font-size: 12px;
  color: rgb(133, 133, 133);
}

.modal--danger {
  margin: 0;
  margin-top: 10px;
  font-size: 12px;
  color: rgb(195, 0, 0);
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

.action--textarea {
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin-top: 5px;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
  font-size: 13px;
}

.action--textarea::placeholder {
  font-size: 13px;
}

select {
  color: #656565;
}

.action--input:focus {
  border: 1px solid #000000;
}

.action--input::placeholder {
  font-size: 13px;
}

.action--form--controller {
  margin-bottom: 10px;
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
  margin-bottom: 20px;
}

@media screen and (max-width: 900px) {
  .modal--content {
    width: 90%;
  }
}
</style>
