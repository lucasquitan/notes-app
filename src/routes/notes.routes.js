const { Router } = require('express');

const NotesController = require('../controllers/NotesController');

const routes = Router();

routes.get('/notes/add', NotesController.renderNoteForm);
routes.post('/notes/new-note', NotesController.createNewNote);

routes.get('/notes', NotesController.renderNotes);
routes.get('/notes/edit/:id', NotesController.renderEditForm);
routes.put('/notes/edit/:id', NotesController.updateNote);
routes.delete('/notes/delete/:id', NotesController.deleteNote);

module.exports = routes;
