<template>
  <tr class="table--tr--single--entity align-middle">
    <td>{{ index + 1 }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.netQuantity }}</td>
    <td>₹ {{ product.price }}</td>
    <td>₹ {{ product.tax }}</td>
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
    <td>
      <BadgeComponent
        :label="checkProductionStatus ? 'In Production' : 'Stopped'"
        :class="[
          checkProductionStatus
            ? 'badge--success--outline'
            : 'badge--error--outline',
          'badge--outline--sm',
        ]"
      />
    </td>
    <td>{{ toDataString(product.createdAt) }}</td>
    <td>
      <ButtonComponent
        label="Edit"
        class="btn--edit--sm"
        @onClick="toggleActionModal(product)"
        type="button"
      />
    </td>
    <td>
      <ButtonComponent
        :label="checkProductionStatus ? 'Stop Production' : 'Start Production'"
        class="btn--delete--sm"
        @onClick="changeProductionStatus()"
        type="button"
      />
    </td>
  </tr>
</template>
<script src="@/components/AdminComponents/script/InventoryTableList.js"></script>
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
