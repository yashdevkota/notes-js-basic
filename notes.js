const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    debugger

    if(note) {
        console.log(chalk.green(note.title))
        console.log(note.body)
    } else
        console.log(chalk.red('Note not found'))
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })

        saveNotes(notes)

        console.log('Note added..')
    } else {
        console.log('Duplicate Note..')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const keepNote = notes.filter((note) => note.title !== title)

    if (keepNote.length === notes.length) {
        console.log(chalk.red('Note Not Found'))
    } else {
        saveNotes(keepNote);
        console.log(chalk.green('Note removed'))
    }
}

const saveNotes = (notes) => {
    const jsonString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', jsonString)
}

const loadNotes = () => {
    try {
        const existingNotes = fs.readFileSync('notes.json')
        const dataJson = existingNotes.toString()

        return JSON.parse(dataJson)
    } catch (e) {
        console.log('exp')
        return []
    }

}

const listNotes = () => {
    console.log(chalk.green('Your Notes : '));
    const notes = loadNotes();
    notes.forEach((note) =>  console.log(note.title));
}

module.exports = {
    readNote,
    addNote,
    removeNote,
    listNotes
}