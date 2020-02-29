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
  res.render('notes/new-note');
};

NotesController.createNewNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new Note({
    title,
    description,
  });

  await newNote.save();

  req.flash('sucess', 'Note created successfully');
  res.redirect('/notes');
};

NotesController.renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render('notes/all-notes', { notes });
};

NotesController.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.render('notes/edit-note', { note });
};

NotesController.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });

  req.flash('sucess', 'Note updated successfully');
  res.redirect('/notes');
};

NotesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  req.flash('sucess', 'Note deleted successfully');
  res.redirect('/notes');
};

module.exports = NotesController;
