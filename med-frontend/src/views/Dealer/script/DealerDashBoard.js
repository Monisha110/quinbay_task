import RequestStepperCard from "@/components/RequestStepperCard.vue";
import RequestDetailCard from "@/components/RequestDetailCard.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import RequestActionModal from "@/components/RequestActionModal.vue";
import { changeRequestStatus } from "@/service/admin.service";
import { mapGetters } from "vuex";
import Vue from "vue";
export default {
  name: "DealerDashBoard",
  data() {
    return {
      selectedRequest: {},
      showRequestActionModal: false,
      requestModalData: {},
      selectedIndex: 0,
      searchRequestKey: "",
      searchStatusKey: "",
    };
  },
  components: {
    RequestStepperCard,
    RequestDetailCard,
    ButtonComponent,
    RequestActionModal,
  },
  watch: {
    searchStatusKey() {
      this.$store.dispatch("GET_ALL_REQUEST_FROM_RETAILER", {
        userId: this.userId,
        requestId: this.searchRequestKey,
        status: this.searchStatusKey,
      });
    },
  },
  computed: {
    ...mapGetters({
      userId: "getUserId",
      requestList: "getDealerRequestHistoryFromRetailer",
    }),
  },
  methods: {
    searchFilter() {
      this.$store.dispatch("GET_ALL_REQUEST_FROM_RETAILER", {
        userId: this.userId,
        requestId: this.searchRequestKey,
        status: this.searchStatusKey,
      });
    },
    closeRequestActionModal() {
      this.showRequestActionModal = false;
    },
    switchSelectedProduct({ data, index }) {
      this.selectedRequest = data;
      this.selectedIndex = index;
    },
    activateApproveRequestModal({ id }) {
      this.showRequestActionModal = true;
      const modalData = {
        modalTitle: "Do you want to approve the request?",
        modalActionButtonLabel: "Approve",
        approved: true,
        // requestData: this.selectedRequest,
        requestId: id,
      };
      this.requestModalData = modalData;
    },
    activateDenyRequestModal({ id }) {
      this.showRequestActionModal = true;
      const modalData = {
        modalTitle: "Do you want to Deny the request?",
        modalActionButtonLabel: "Deny",
        approved: false,
        // requestData: this.selectedRequest,
        requestId: id,
      };
      this.requestModalData = modalData;
    },
    saveActionCall(data) {
      console.log(data);
      changeRequestStatus({
        requestData: data,
        successCallback: (res) => {
          if (res.status === 200) {
            Vue.$toast.success("Request Responded!");
            this.$store.dispatch("GET_ALL_REQUEST_FROM_RETAILER", {
              userId: this.userId,
            });
          } else {
            Vue.$toast.success("Request Failed!");
          }
        },
        errorCallback: (err) => {
          Vue.$toast.error(err.response.data.message);
        },
      });
      this.showRequestActionModal = false;
    },
  },
  created() {
    this.$store.dispatch("GET_ALL_REQUEST_FROM_RETAILER", {
      userId: this.userId,
    });
  },
};
