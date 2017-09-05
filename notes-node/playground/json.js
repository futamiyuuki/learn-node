const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFile('notes.json', originalNoteString, err => {
  if(err) return console.err('ERROR: Cannot write');
  fs.readFile('notes.json', (err, data) => {
    note= JSON.parse(data);
    console.log(note.title);
    console.log(typeof note);
  });
});