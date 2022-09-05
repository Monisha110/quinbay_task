<template>
  <tr class="table--tr--single--entity align-middle">
    <td>{{ index + 1 }}</td>
    <td>{{ changeDateFormat(request.createdAt) }}</td>
    <td>{{ request.product.name }}</td>
    <td>{{ request.requestedQuantity }}</td>
    <td>₹ {{ request.product.price }} + ₹ {{ request.product.tax }} Tax</td>
    <td>
      <BadgeComponent
        :label="request.status"
        :class="[
          request.status === 'APPROVED'
            ? 'badge--success--outline'
            : request.status === 'DENIED'
            ? 'badge--error--outline'
            : 'badge--warning--outline',
          'badge--outline--sm',
        ]"
      />
    </td>
    <td>{{ request.remark ? request.remark : "-" }}</td>
  </tr>
</template>
<script src="@/components/DealerComponents/script/RequestHistoryTableList.js"></script>
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
