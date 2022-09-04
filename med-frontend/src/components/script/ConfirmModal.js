import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "ConfirmModal",
  components: {
    ButtonComponent,
  },
  props: {
    modalTitle: {
      type: String,
      default: "Confirm Action",
    },
    modalAction: {
      type: String,
      default: "Delete",
    },
    undo: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeAction() {
      this.$emit("closeAction");
    },
    confirmAction() {
      this.$emit("confirmAction");
    },
  },
};
