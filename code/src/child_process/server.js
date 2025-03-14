const { spawn } = require("child_process");

function generateInvoice(orderId) {

    const child = spawn('node', ['invoiceGenerator.js', orderId]);

    child.stdout.on('data', (data) => {
        console.log(`Invoice output : ${data}`);
    });

    child.stderr.on('data', (error) => {
        console.error(`Error : ${error}`)
    })

    child.on('close', (code) => {
        console.log(`Invoice process exited with code ${code}`);
    })
}
generateInvoice('OrderId :123456')