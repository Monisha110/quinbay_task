<template>
  <tr class="table--tr--single--entity align-middle">
    <td>{{ index + 1 }}</td>
    <td>{{ changeDateFormat(sales.createdTime) }}</td>
    <td>
      <ul>
        <li v-for="(data, index) in sales.orderItems" :key="index">
          {{ data.name + " - " + data.quantity }}
        </li>
      </ul>
    </td>
    <td>{{ sales.paymentMethod }}</td>
    <td>₹ {{ sales.subTotal }}</td>
    <td>
      <BadgeComponent
        :label="sales.status"
        :className="[
          sales.status === 'CREATED'
            ? 'badge--success--outline'
            : 'badge--error--outline',
          'badge--outline--sm',
        ]"
      />
    </td>
  </tr>
</template>
<script src="@/components/RetailerComponents/script/SalesHistoryTableList.js"></script>
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
