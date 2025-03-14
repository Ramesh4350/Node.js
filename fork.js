const { fork } = require("child_process");
const child = fork("child.js");

child.on("message", (message) => {
    console.log("Received from child : ", message);
})

child.send({ hello: "world" });
