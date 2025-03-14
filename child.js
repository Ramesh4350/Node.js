
process.on("message", (message) => {
    console.log("Received from parent: ", message);
    process.send({ reply: "Hello from child!" });
})