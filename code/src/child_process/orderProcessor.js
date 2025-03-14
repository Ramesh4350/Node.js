process.on("message", (data) => {
    console.log(`Child received order : ${data.orders}`);
    const processedOrder = data.orders.map((order) => (
        {
            orderId: order.orderId,
            status: "processed",
            timestamp: new Date().toString()
        }
    ))
    process.send({
        status: "Completed",
        processedOrder
    })

    process.exit();
})