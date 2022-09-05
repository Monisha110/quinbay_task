<template>
  <tr class="table--tr--single--entity align-middle">
    <td>{{ index + 1 }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.username }}</td>
    <td>{{ toDataString(user.createdAt) }}</td>
    <td>
      <BadgeComponent
        :label="checkStatus ? 'Active' : 'InActive'"
        :class="[
          checkStatus ? 'badge--success--outline' : 'badge--error--outline',
          'badge--outline--sm',
        ]"
      />
    </td>
    <td>{{ user.role }}</td>
    <td>
      <ButtonComponent
        label="Edit"
        :disabled="user.role === 'ADMIN'"
        :class="user.role === 'ADMIN' ? 'btn--disabled--sm' : 'btn--edit--sm'"
        @onClick="editModal()"
        type="button"
      />
    </td>
    <td>
      <ButtonComponent
        :disabled="user.role === 'ADMIN'"
        :label="user.active ? 'Deactivate' : 'Activate'"
        :class="user.role === 'ADMIN' ? 'btn--disabled--sm' : 'btn--delete--sm'"
        @onClick="accessConfirmation()"
        type="button"
      />
    </td>
  </tr>
</template>
<script src="@/components/AdminComponents/script/UserTableList.js"></script>
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
