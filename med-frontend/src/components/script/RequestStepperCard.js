import BadgeComponent from "@/components/BadgeComponent.vue";

export default {
  name: "ProductStepperCard",
  components: {
    BadgeComponent,
  },
  props: {
    requestData: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    checkStatus() {
      return this.request === "Completed";
    },
  },
  methods: {
    selectRequest(data) {
      this.$emit("sendDataToDetailTab", { data: data, index: this.index });
    },
  },
};
