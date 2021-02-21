//////////////////NODE MODULES///////////////////

const path = require("path");

module.exports = function (app) {
    //Get index html first
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
    //Get notes html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
};