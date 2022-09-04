module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "src/components/script/**",
    "src/components/AdminComponents/script/**",
    "src/components/DealerComponents/script/**",
    "src/components/RetailerComponents/script/**",
    "src/views/script/**",
    "src/views/Admin/script/**",
    "src/views/Dealer/script/**",
    "src/views/HelperPages/script/**",
    "src/views/Retailer/script/**",
  ],
};
