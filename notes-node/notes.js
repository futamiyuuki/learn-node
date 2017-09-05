console.log('Starting Notes');

const fs = require('fs');

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const fetchNotes = () => {
  try {
    const data = fs.readFileSync('notes-data.json');
    return JSON.parse(data);
  } catch(err) {
    console.error('notes-data.json not found');
    return [];
  }
};

const addNote = (title, body) => {
  const note = {
    title,
    body
  };
  const notes = fetchNotes();
  const duplicateNotes = notes.filter(val => val.title === title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {

};

const getNote = title => {
  const notes = fetchNotes();
  const matchedNotes = notes.filter(val => title === val.title);
  return matchedNotes[0];
};

const removeNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}