const db = require('../config/config')
const bcrypt = require('bcryptjs');

const User = {};

User.create = async (user, result) => {

    const hash = await bcrypt.hash(user.password, 10);

    const sql = `
        INSERT INTO
    users(
        email,
        name,
        lastname,
        phone,
        password,
        created_at,
        updated_at,
    )
VALUES(?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
        sql,
        [
           user.email,
           user.name,
           user.lastname,
           user.phone,
           hash,
           new Date(),
           new Date()

        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo usuario:', res.insertId);
                result(null, res.insertId);
            }
        }
    )
}

User.update = (user, result) => {
    const sql = `
    UPDATE
        users
    SET
        name = ?,
        lastname = ?,
        phone = ?,
        updated_at = ?
    WHERE
        id = ?
        `;
        db.query(
            sql,
            [
               user.name,
               user.lastname,
               user.phone,
               new Date(),
               user.id
    
            ],
            (err, res) => {
                if (err) {
                    console.log('Error:', err);
                    result(err, null);
                }
                else {
                    console.log('Id del nuevo vehiculo:', user.id);
                    result(null, user.id);
                }
            }
        )
}


User.delete = (id, result) => {

    const sql = `
    DELETE FROM
        users
    WHERE
        id = ?
    
    
    `;
    db.query(
        sql,
        [id],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Se elimino al cuenta con id : ', id);
                result(null, id);
            }
        }
    )
}

User.findByEmail = (email, result) => {

    const sql = `
        SELECT
            U.id,
            U.email,
            U.name,
            U.lastname,
            U.phone,
            U.password
        FROM
            users AS U
        WHERE
            email = ?
    `;

    db.query(
        sql,
        [email],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Usuario obtenido: ', user[0]);
                result(null, user[0]);
            }
        }
    )
}


User.findById = (id, result) => {

    const sql = `
    SELECT
            U.id,
            U.email,
            U.name,
            U.lastname,
            U.phone,
            U.password
            
        FROM
            users AS U
        WHERE
            U.id = ?
    `;

    db.query(
        sql,
        [email],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Usuario obtenido: ', user[0]);
                result(null, user[0]);
            }
        }
    )
}
