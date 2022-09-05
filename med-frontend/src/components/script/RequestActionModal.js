import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "RequestActionModal",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      remark: "",
    };
  },
  props: {
    requestModalData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    closeAction() {
      this.$emit("closeAction");
    },
    confirmAction() {
      const objForConfirm = {
        remark: this.remark,
        requestId: this.requestModalData.requestId,
        approved: this.requestModalData.approved,
      };
      this.$emit("saveAction", objForConfirm);
    },
  },
};
