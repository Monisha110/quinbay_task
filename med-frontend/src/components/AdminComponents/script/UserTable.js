import UserTableList from "@/components/AdminComponents/UserTableList.vue";
import ConfirmModal from "@/components/ConfirmModal.vue";
import UserEditModal from "@/components/AdminComponents/UserEditModal.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { mapGetters } from "vuex";
import Vue from "vue";

import {
  updateUserName,
  updateUserPassword,
  updatePermission,
} from "@/service/admin.service";
import SpinnerProgress from "@/components/SpinnerProgress.vue";

export default {
  name: "UserTable",
  data() {
    return {
      loader: false,
      showConfirmModal: false,
      showEditModal: false,
      searchText: "",
      userIdToUpdateActive: "",
      userObjToEdit: {
        name: "",
        userId: "",
      },
    };
  },
  components: {
    UserTableList,
    ConfirmModal,
    ButtonComponent,
    UserEditModal,
    SpinnerProgress,
  },
  methods: {
    clearSearch() {
      this.searchText = "";
      this.$store.dispatch("GET_ALL_USER");
    },
    searchName() {
      this.$store.dispatch("GET_ALL_USER", this.searchText);
    },
    toggleConfirmModal({ userId }) {
      this.userIdToUpdateActive = userId;
      this.showConfirmModal = true;
    },
    toggleEditModal({ userData }) {
      this.userObjToEdit.name = userData.name;
      this.userObjToEdit.userId = userData.userId;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    confirmActionCall() {
      updatePermission({
        userId: this.userIdToUpdateActive,
        successCallback: (res) => {
          if (res.status === 200) {
            this.$store.dispatch("GET_ALL_USER");
            Vue.$toast.success("User Account Updated");
          }
        },
        errorCallback: (err) => {
          console.log(err);
          Vue.$toast.error(err.message);
        },
      });
      this.userId = "";
      this.showConfirmModal = false;
    },
    saveActionCall({ isUpdateName, userData }) {
      if (isUpdateName) {
        console.log(userData);
        updateUserName({
          userData,
          successCallback: (res) => {
            if (res.status === 200) {
              this.$store.dispatch("GET_ALL_USER");
              Vue.$toast.success("User Name Updated");
            }
          },
          errorCallback: (err) => {
            console.log(err.message);
            Vue.$toast.success(err.message);
          },
        });
      } else {
        updateUserPassword({
          userData,
          successCallback: (res) => {
            if (res.status === 200) {
              this.$store.dispatch("GET_ALL_USER");
              Vue.$toast.success("User Password Updated");
            }
          },
          errorCallback: (err) => {
            console.log(err.message);
          },
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      userList: "getAllUser",
    }),
  },
  created() {
    this.$store.dispatch("GET_ALL_USER");
  },
};
