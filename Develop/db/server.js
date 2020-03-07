const express = require("express");
const path = require("path");
var fs = require('fs');
var app = express();


const PORT = process.env.PORT || 3000;








app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});