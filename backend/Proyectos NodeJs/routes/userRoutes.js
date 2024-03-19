const usersController = require('../controllers/userController');

const passport = require('passport');

module.exports = (app, upload) => {

    app.post('/api/users/create', usersController.create);

    app.post('/api/users/login', usersController.login);

    app.delete('/api/users/delete/:id', passport.authenticate('jwt', {session:  false}), usersController.delete);

    app.put('/api/users/update', passport.authenticate('jwt', { session: false }), usersController.update);
}