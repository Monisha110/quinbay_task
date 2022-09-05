<template>
  <tr class="table--tr--single--entity align-middle">
    <td>{{ index + 1 }}</td>
    <td>{{ product.dealerId }}</td>
    <td>{{ product.productDetail.id }}</td>
    <td>{{ product.productDetail.name }}</td>
    <td>₹ {{ product.productDetail.price }}</td>
    <td>₹ {{ product.productDetail.tax }}</td>
    <td>
      <BadgeComponent
        :label="checkAvailabilityStatus ? 'Available' : 'Out of Stock'"
        :class="[
          checkAvailabilityStatus
            ? 'badge--success--outline'
            : 'badge--error--outline',
          'badge--outline--sm',
        ]"
      />
    </td>
    <!-- <td>
      <ButtonComponent
        label="Edit"
        class="btn--edit--sm"
        @onClick="toggleActionModal(product)"
        type="button"
      />
    </td> -->
    <td>
      <ButtonComponent
        label="Request Item"
        :disabled="!checkAvailabilityStatus"
        :class="[
          checkAvailabilityStatus ? 'btn--edit--sm' : 'btn--disabled--sm',
        ]"
        @onClick="toggleActionModal(product)"
        type="button"
      />
    </td>
  </tr>
</template>
<script src="@/components/RetailerComponents/script/BuyProductsTableList.js"></script>
<style scoped>
.table--tr--single--entity {
  border-bottom: 1px solid rgba(233, 233, 233, 0.683);
}

.table--tr--single--entity > td {
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  color: #646464;
}
</style>
