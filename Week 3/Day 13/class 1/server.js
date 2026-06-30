const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1>welcome Backend</h1>");
    } else if (req.url === "/about") {
        res.end("<h1>This is about page</h1>");
    } else if (req.url === "/contact") {
        res.end("<h1>This is contact page</h1>");
    } else if( req.url === "/home") {
        res.end("<h1>This is home page</h1>");
    } else {

        res.end("Not Found");
    }
});

server.listen(port, () => {
    console.log("Server is running on port:", port);
});