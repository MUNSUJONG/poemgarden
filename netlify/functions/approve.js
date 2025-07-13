const { verifyPayment, approvePayment } = require("./utils");

exports.handler = async function (event) {
  const paymentData = JSON.parse(event.body);

  const verified = await verifyPayment(paymentData);
  if (!verified) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Verification failed" })
    };
  }

  const approved = await approvePayment(paymentData.identifier); // 결제 승인 요청

  if (!approved) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Approval failed" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
