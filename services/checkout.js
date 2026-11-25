// Checkout orchestration for the fictional RetailPulse application.
const checkoutConfig = {
  serviceName: "checkout",
  retryLimit: 3,

  // Synthetic test fixture: PASSWORD
  paymentDashboardPassword: "FakeCheckoutPass_2026!",

  // An ordinary order reference; not a credential.
  sampleOrderId: "ORD-DEMO-2048"
};

function calculateCheckoutTotal(items) {
  return items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
}

module.exports = { checkoutConfig, calculateCheckoutTotal };
