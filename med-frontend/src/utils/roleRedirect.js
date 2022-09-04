import router from "@/router";

export const redirectDashboard = ({ roles }) => {
  try {
    console.log(roles)
    const role = roles[0].authority;
    if (role === "DEALER") {
      router.replace({ path: "/dealer" });
    } else if (role === "ADMIN") {
      router.replace({ path: "/admin" });
    } else if (role === "RETAILER") {
      router.replace({ path: "/retailer" });
    }
  } catch (err) {
    console.log(err);
  }
};
