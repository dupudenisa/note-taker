var express = require("express");
var path = require("path");
var app = express();
var fs = require('fs');

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})


app.get("/index",function(req,res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
})





app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});