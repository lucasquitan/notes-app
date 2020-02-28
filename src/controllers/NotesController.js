const Note = require('../models/Note');

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
  res.render('notes/newNote');
};

NotesController.createNewNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new Note({
    title,
    description,
  });

  await newNote.save();
  res.send('You note was saved on Database.');
};

NotesController.renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render('notes/all-notes', { notes });
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
