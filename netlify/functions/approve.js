exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  console.log("Payment ID for approval:", body.paymentId);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Payment approved", paymentId: body.paymentId })
  };
};
