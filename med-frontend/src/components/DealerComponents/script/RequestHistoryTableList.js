import BadgeComponent from "@/components/BadgeComponent.vue";
export default {
  name: "RequestHistoryTableList",
  props: {
    request: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {
    BadgeComponent,
  },
  computed: {},
  methods: {
    changeDateFormat(data) {
      return new Date(data).toDateString();
    },
  },
};
