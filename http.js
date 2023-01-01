const http = require("http");

const server = http.createServer((req, res) => {
	// console.log(req);
	if (req.url === "/") {
		res.end("Hello World! This is a home page");
	}
	if (req.url === "/about") {
		res.end("This is about");
	}
	res.end(`<h1>Oops! dont fuck around here. Nothing to show</h1>`);
});

server.listen(3333);
