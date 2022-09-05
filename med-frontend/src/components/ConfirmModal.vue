<template>
  <div class="modal--bg">
    <div class="modal--content">
      <div class="modal--body">
        <p class="modal--header">{{ modalTitle }}</p>
        <p class="modal--subheader">
          Are you sure you want to <b>{{ modalAction }}</b
          >? <span v-if="undo"> This action can be undo.</span>
        </p>
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
              label="Confirm"
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
<script src="@/components/script/ConfirmModal.js"></script>
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
  border-radius: 20px;
}
.modal--footer {
  /* border-top: 1px solid rgb(202, 202, 202); */
  padding: 10px 20px;
  margin-bottom: 10px;
}
.modal--body {
  padding: 10px 20px;
  text-align: center;
}

.modal--header {
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
}

.modal--subheader {
  font-size: 16px;
  font-weight: 500;
  color: rgb(137, 137, 137);
}

@media screen and (max-width: 900px) {
  .modal--content {
    width: 90%;
  }
}
</style>
