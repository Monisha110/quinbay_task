<template>
  <div class="modal--bg">
    <div class="modal--content">
      <div class="modal--body">
        <p class="modal--header">{{ modalHeader }}</p>

        <div class="action--form--controller">
          <label for="user-name" class="action--input--label"
            >Product Name *</label
          >
          <input
            type="text"
            class="action--input"
            v-model="product.name"
            placeholder="Enter Product Name"
          />
        </div>
        <div class="action--form--controller">
          <label for="user-imageurl" class="action--input--label"
            >ImageUrl *</label
          >
          <input
            type="link"
            class="action--input"
            v-model="product.imageUrl"
            placeholder="Paste imageUrl"
          />
        </div>
        <div class="action--form--controller">
          <label for="user-quantity" class="action--input--label"
            >Net Quantity *</label
          >
          <input
            type="number"
            class="action--input"
            v-model="product.netQuantity"
            placeholder="Enter Net Quanity"
          />
        </div>
        <div class="action--form--controller">
          <label for="user-price" class="action--input--label">Price *</label>
          <input
            type="number"
            class="action--input"
            v-model="product.price"
            placeholder="Enter Price"
          />
        </div>
        <div class="action--form--controller">
          <label for="user-tax" class="action--input--label">Tax *</label>
          <input
            type="text"
            class="action--input"
            v-model="product.tax"
            placeholder="Enter Tax Amount"
          />
        </div>
        <div class="action--form--controller">
          <label for="user-description" class="action--input--label"
            >Description *</label
          >
          <textarea
            type="text"
            rows="4"
            class="action--textarea"
            v-model="product.description"
            placeholder="Enter Product Description"
          />
        </div>
        <p>
          <small>Text should contains min 5 characters!</small>
        </p>
      </div>
      <div class="modal--footer">
        <div class="row">
          <div class="col-6 pe-1">
            <ButtonComponent
              label="Close"
              buttonStyle="btn--black--outline"
              @onClick="closeAction()"
              type="button"
            />
          </div>
          <div class="col-6 ps-1">
            <ButtonComponent
              :disabled="!checkAllField"
              :label="modalButtonLabel"
              :buttonStyle="[!checkAllField ? 'btn--disabled' : 'btn--black']"
              @onClick="confirmAction()"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/components/AdminComponents/script/InventoryActionModal.js"></script>
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
  min-height: 380px;
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
</style>
