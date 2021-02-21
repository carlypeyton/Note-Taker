// //////////////////NODE MODULES///////////////////

const path = require("path");

///////////////////EXPORT MODULE///////////////////

module.exports = function (app) {
    //Get index html first
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //Get notes html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};