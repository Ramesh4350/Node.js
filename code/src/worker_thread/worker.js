const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        console.time("Fast proces")
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("Home Page");
        console.timeEnd("Fast proces")
    }
    else if (req.url === '/slow-page') {
        console.time("Slow proces")
        const worker = new Worker("./worker_thread.js");

        worker.on("message", (j) => {
            res.writeHead(200, {
                "content-type": "text/plain"
            });
            res.end(`Slow Page ${j}`)
        });
        console.timeEnd("Slow proces")
    }
})

server.listen(8000, () => {
    console.log(`Server is runing at port 8000`);

})