const { exec } = require("child_process");

exec("dir", (error, stdout, stderr) => {

    if (error) {
        console.error(`exce error: ${error}`);
        return;
    }

    console.log(`stdout : ${stdout}`);
    console.log(`stderr : ${stderr}`);
})