var express = require("express");
var path = require("path");
var app = express();
var fs = require('fs');

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var notes = [];


//returns the index.html.
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
})



//returns the note.html.
app.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})


//returns saved notes from json.
app.get("/api/notes", function (req,res){
    
    fs.readFile("./db/db.json", 'utf8', function (err,data){
        if (err) throw err;
        console.log(data);
        return res.json(data);
    })


})

// receive a new note to save on the request body.
app.post("/api/notes", function (req,res) {
    
    var note = req.body;
    console.log(note);
    notes.push(note);

    res.send("Note Added!");

    fs.writeFile("./db/db.json", 'utf8', function (err,data){
        if (err) throw err;
        return res.json(data);
    })

})

// receive a query parameter containing the id of a note to delete.
app.delete("/api/notes/:id", function (req,res){

})

//Starts the server to begin listening.
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});
