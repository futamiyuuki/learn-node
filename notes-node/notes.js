console.log('Starting Notes');

const fs = require('fs');

const saveNotes = (notes, title, body) => {
  const note = {
    title,
    body
  };
  const duplicateNotes = notes.filter(val => val.title === note.title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFile('notes-data.json', JSON.stringify(notes), err => {
      if(err) return console.err('ERROR: cannot write file');
      console.log(`${note.title} Added`);
    });
  } else {
    console.log('Note title taken');
  }
};

const remove = (notes, title) => {
  const newNotes = notes.filter(val => val.title !== title);
  if(newNotes.length < notes.length) {
    fs.writeFile('notes-data.json', JSON.stringify(newNotes), err => {
      if(err) return console.err('ERROR: cannot write file');
      console.log(`${title} Removed`);
    });
  } else {
    console.log(`No note with title: ${title}; remove failed`);
  }
}

const fetchAndAct = (action, ...info) => {
  let notes = [];
  fs.readFile('notes-data.json', (err, data) => {
    if(err) console.error('ERROR: cannot read file');
    else notes = JSON.parse(data);
    action(notes, ...info);
  });
};

const addNote = (title, body) => {
  fetchAndAct(saveNotes, title, body);
};

const getAll = () => {

};

const getNote = title => {

};

const removeNote = title => {
  fetchAndAct(remove, title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}