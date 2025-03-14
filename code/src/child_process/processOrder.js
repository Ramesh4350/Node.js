const { fork } = require("child_process");

function processOrder(orderList) {
    const child = fork("./orderProcessor.js");
    child.send({ orders: orderList });
    child.on("message", (message) => {
        console.log("Parent received:", message);
    })
    child.on("exit", (code) => {
        console.log("child process exit with code :", code);
    })
}
const orders = [
    { orderId: 101, customer: "Alice", amount: 200 },
    { orderId: 102, customer: "Bob", amount: 350 },
    { orderId: 103, customer: "Charlie", amount: 500 },
];
processOrder(orders)