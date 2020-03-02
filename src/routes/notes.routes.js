const { Router } = require('express');

const NotesController = require('../controllers/NotesController');
const { isAuth } = require('../helpers/auth');

const routes = Router();

routes.get('/notes/add', isAuth, NotesController.renderNoteForm);
routes.post('/notes/new-note', isAuth, NotesController.createNewNote);

routes.get('/notes', isAuth, NotesController.renderNotes);
routes.get('/notes/edit/:id', isAuth, NotesController.renderEditForm);
routes.put('/notes/edit/:id', isAuth, NotesController.updateNote);
routes.delete('/notes/delete/:id', isAuth, NotesController.deleteNote);

module.exports = routes;
