console.log('Starting App');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
if(command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if(command === 'list') {
  notes.getAll();
} else if(command === 'read') {
  const note = notes.getNote(argv.title);
  if(note) {
    console.log('Note Found');
    notes.logNote(note);
  }
  else console.log('Cannot find note');
} else if(command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}