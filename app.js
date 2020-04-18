const notes = require('./notes.js');
const chalk = require('chalk')
const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.parse()

// const command = process.argv[2];

// console.log(yargs.argv)

// // if (command === 'add') {
//     console.log('adding note')
// } else if (command === 'remove') {
//     console.log('removing note')
// }
