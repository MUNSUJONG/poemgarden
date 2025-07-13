const axios = require("axios");

const API_KEY = process.env.PI_API_KEY;
const APP_PRIVATE_KEY = process.env.PI_APP_PRIVATE_KEY;

const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.get(
      `https://api.minepi.com/payments/${paymentData.identifier}`,
      {
        headers: {
          Authorization: `Key ${API_KEY}`
        }
      }
    );

    return response.data && response.data.payment && response.data.payment.status === "READY";
  } catch (error) {
    console.error("Verification error:", error);
    return false;
  }
};

const approvePayment = async (paymentId) => {
  try {
    const response = await axios.post(
      `https://api.minepi.com/payments/${paymentId}/approve`,
      {},
      {
        headers: {
          Authorization: `Key ${API_KEY}`,
          "X-Pi-Signature": APP_PRIVATE_KEY
        }
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Approval error:", error);
    return false;
  }
};

module.exports = { verifyPayment, approvePayment };
