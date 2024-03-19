const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');



module.exports = {
    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, myUser) => {
            console.log('Error', err);
            console.log('Usuario', myUser);

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error en el login  del usuario',
                    error: err
                });
            }

            if (!myUser) {
                return res.status(401).json({
                    success: false,
                    message: 'El email no encontrado'
                });
            }

            const isPasswprdValid = await bcrypt.compare(password, myUser.password);

            if (isPasswprdValid) {
                const token = jwt.sign({ id: myUser.id, email: myUser.email }, keys.secretOrKey, {});

                const data = {
                    id: `${myUser.id}`,
                    email: myUser.email,
                    name: myUser.name,
                    lastname: myUser.lastname,
                    phone: myUser.phone,
                    session_token: `JWT ${token}`,
                }

                return res.status(201).json({
                    success: true,
                    message: 'El usuario fue autenticado',
                    data: data
                });
            }

            else {
                return res.status(401).json({
                    success: false,
                    message: 'La contraseña es incorrecta'
                });
            }

        });
    },


    create(req, res) {
        const user = req.body;

        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data
            });
        });
    },


    delete(req, res) {

        const id = req.params.id;

        User.delete(id, (err, id) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de eliminar la cuenta',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'La cuenta se eliminó correctamente',
                data: `${id}`
            });

        });
    },


    update(req, res){
        const product = req.body;
        User.update(product, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error coin la actualizacion del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El usuario se actualizo correctamente',
               data: data
            });
        })
    },


    findById(req, res) {
        const id = req.params.id;
        User.findById(id, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con la obtencion del usuario',
                    error: err
                });
            }

            return res.status(201).json(data);

        });
    },
}