const NotesController = {};

/**
 * renderNoteForm = Render the page for create the new note.
 * createNewNote = Create a new note on database.
 * renderNotes = Render all notes.
 * renderEditForm = Render the form to edit an exist note.
 * updateNote = Update an exist note.
 * deleteNote = Exclude an exist note.
 */

NotesController.renderNoteForm = (req, res) => {
  res.send('Formm new note!');
};

NotesController.createNewNote = (req, res) => {
  res.send(`Create new note`);
};

NotesController.renderNotes = (req, res) => {
  res.send('Render all notes');
};

NotesController.renderEditForm = (req, res) => {
  res.send('Edit formm');
};

NotesController.updateNote = (req, res) => {
  res.send('Editing note');
};

NotesController.deleteNote = (req, res) => {
  res.send('Note deleted');
};

module.exports = NotesController;
