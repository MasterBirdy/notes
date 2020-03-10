const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//customizer version
yargs.version("1.1.19");

//create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log("Removing the note!");
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function() {
        console.log("Reading the note!");
    }
});

yargs.command({
    command: "List",
    describe: "List all notes",
    handler: function() {
        console.log("Listing all the notes!");
    }
});

//add, remove, read, list
yargs.parse();
