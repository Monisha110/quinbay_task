export const adminNavBarRoutes = {
  role: "ADMIN",
  routes: [
    {
      label: "Dashboard",
      name: "AdminDashBoard",
    },
    {
      label: "Inventory",
      name: "AdminInventory",
    },
    {
      label: "User Management",
      name: "AdminUserManagement",
    },
  ],
};

export const retailerNavBarRoutes = {
  role: "RETAILER",
  routes: [
    {
      label: "Dashboard",
      name: "RetailerDashBoard",
    },
    {
      label: "Sales History",
      name: "RetailerSalesHistory",
    },
    {
      label: "Buy Products",
      name: "RetailerBuyProducts",
    },
    {
      label: "Request History",
      name: "RetailerRequestHistory",
    },
    {
      label: "Inventory",
      name: "RetailerInventory",
    },
  ],
};

export const dealerNavBarRoutes = {
  role: "DEALER",
  routes: [
    {
      label: "Dashboard",
      name: "DealerDashBoard",
    },
    {
      label: "Buy Products",
      name: "DealerBuyProducts",
    },
    {
      label: "Request History",
      name: "DealerRequestHistory",
    },
    {
      label: "Inventory",
      name: "DealerInventory",
    },
  ],
};
