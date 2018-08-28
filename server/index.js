var bookings = require("./controllers/bookings.js");
var available = require("./controllers/available.js");

var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var http = require("http").Server(app);

var io = require("socket.io")(http);

io.on("connection", () => {
	console.log("connection is on :-)");
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Credentials", true);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.send("Hello World!");
});

app.get("/api/bookings", bookings.read);
app.get("/api/available", available.read);
app.post("/api/available", available.create);
app.post("/api/bookings", bookings.create);

http.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});
