const bodyParser = require('body-parser');
var express = require('express');
var app = express();
console.log("Hello World");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/:word/echo", (req, res) => {
  res.json({echo: req.params.word});
});
app.use((req, res, next) => { 
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
  	res.send({message: "Hello json".toUpperCase()});
  } else {
	  res.send({message: "Hello json"});
  }
});
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time: req.time});
});
const handleQueryStrings = (req, res) => {
  res.json({name: `${req.query.first} ${req.query.last}`});
}
const handlePostData = (req, res) => {
  res.json({name: `${req.body.first} ${req.body.last}`});
}
app.route("/name").get(handleQueryStrings).post(handlePostData);



































 module.exports = app;
