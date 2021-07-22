var express = require('express');
var app = express();
console.log("Hello World");
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
  	res.send({message: "Hello json".toUpperCase()});
  } else {
	rese.send({message: "Hello json"});
  }
});



































 module.exports = app;
