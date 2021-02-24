// //////////////////NODE MODULES///////////////////

const fs = require("fs");

//NPM package for unique IDs
const { v4: uuidv4 } = require('uuid');

///////////////////EXPORT MODULE///////////////////

module.exports = function (app) {
    //Read db file and return notes as JSON 
    let notesList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    //GET request
    app.get("/api/notes", function (req, res) {
        res.json(notesList);
    });
    //POST request
    app.post("/api/notes", function (req, res) {
        const newNote = req.body;
        // Set unique id for each note
        newNote.id = uuidv4();
        //Push new note to notes list
        notesList.push(newNote);
        //Write file
        fs.writeFileSync('./db/db.json', JSON.stringify(notesList));
        //Send notes list to browser
        res.send(notesList);
        console.log("Note saved!")
    });
};









