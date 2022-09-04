import BadgeComponent from "@/components/BadgeComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "RequestDetailCard",
  props: {
    requestData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    BadgeComponent,
    ButtonComponent,
  },
  computed: {
    checkStatus() {
      return true;
    },
  },
  methods: {
    toDateString(data) {
      return new Date(data).toDateString();
    },
    approveRequest() {
      this.$emit("approveRequest", { id: this.requestData.id });
    },
    denyRequest() {
      this.$emit("denyRequest", { id: this.requestData.id });
    },
  },
};
