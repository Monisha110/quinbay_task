import BadgeComponent from "@/components/BadgeComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "UserTableList",
  props: {
    user: {
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
    ButtonComponent,
  },
  computed: {
    ...mapGetters({
      userId: "getUserId",
    }),
    checkStatus() {
      return this.user.active;
    },
  },
  methods: {
    editModal() {
      this.$emit("editModal", { userData: this.user });
    },
    accessConfirmation() {
      this.$emit("activateModal", { userId: this.user.userId });
    },
    toDataString(date) {
      return new Date(date).toDateString();
    },
  },
};
