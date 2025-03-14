const { execFile } = require("child_process");

execFile("node", ["exec.js", "spawn.js"], (error, stdout, stderr) => {

    if (error) {
        console.error(`execFile error: ${error}`);
        return;
    }
    console.log(`Node.js version: ${stdout}`);
})