// Create express app
var express = require("express")
var cors = require('cors')
var db = require("./database.js")
var app = express()
var md5 = require("md5")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors)

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});


// Insert here other API endpoints


// Default response for any other request
app.use(function(req, res){
    res.status(404);
});