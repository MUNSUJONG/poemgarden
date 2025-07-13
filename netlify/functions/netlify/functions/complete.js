exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  console.log("Payment completed:", body.paymentId, "TXID:", body.txid);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Payment completed", paymentId: body.paymentId, txid: body.txid })
  };
};
