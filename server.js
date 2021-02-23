//////////////////NODE MODULES///////////////////

const express = require("express");
// const fs = require("fs");
// const path = require("path");

///////////////EXPRESS CONFIGURATION///////////////

//Create express server
const app = express();
//Set initial port
const PORT = process.env.PORT || 3000;
//Set express app to handle data parsing
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///////////////////ROUTES/////////////////////

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

/////////////////////START SERVER//////////////////////

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});

