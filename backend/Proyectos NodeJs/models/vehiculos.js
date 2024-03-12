const db = require('../config/config');
const Vehiculos = {};




Vehiculos.create = (vehiculos, result) => {

    const sql = `
    INSERT INTO
        vehiculos(
            placa,
            numero_economico,
            vim,
            asientos,
            seguro,
            seguro_numero,
            brand,
            model,
            year,
            color,
            lat,
            lng,
            ubicacion
        )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            
    `;
    db.query(
        sql,
        [
            vehiculos.placa,
            vehiculos.numero_economico,
            vehiculos.vim,
            vehiculos.asientos,
            vehiculos.seguro,
            vehiculos.seguro_numero,
            vehiculos.brand,
            vehiculos.model,
            vehiculos.year,
            vehiculos.color,
            vehiculos.lat,
            vehiculos.lng,
            vehiculos.ubicacion
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo vehiculo:', res.insertId);
                result(null, res.insertId);
            }
        }
    )
}


Vehiculos.update = (vehiculos, result) => {

    const sql = `
    UPDATE
        vehiculos
    SET
        placa = ? ,
        numero_economico = ? ,
        vim = ? ,
        asientos = ? ,
        seguro = ? ,
        seguro_numero = ? ,
        brand = ? ,
        model = ? ,
        year = ? ,
        color = ?,
        lat = ?,
        lng = ?,
        ubicacion =?
    WHERE
        id = ? 
            
    `;
    db.query(
        sql,
        [
            vehiculos.placa,
            vehiculos.numero_economico,
            vehiculos.vim,
            vehiculos.asientos,
            vehiculos.seguro,
            vehiculos.seguro_numero,
            vehiculos.brand,
            vehiculos.model,
            vehiculos.year,
            vehiculos.color,
            vehiculos.lat,
            vehiculos.lng,
            vehiculos.ubicacion,
            vehiculos.id
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id del vehiculo actualizado:', vehiculos.id);
                result(null, vehiculos.id);
            }
        }
    )
}



Vehiculos.delete = (id, result) => {

    const sql = `
    DELETE FROM
        vehiculos
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
                console.log('Id del producto eliminado:', id);
                result(null, id);
            }
        }
    )
}



Vehiculos.findById = (id, result) => {
    const sql = `
        SELECT
            V.placa,
            V.numero_economico,
            V.vim,
            V.asientos,
            V.seguro,
            V.seguro_numero,
            V.brand,
            V.model,
            V.year,
            V.color,
            V.lat,
            V.lng,
            V.ubicacion 
        FROM 
            vehiculos as V
        WHERE
            V.id = ?
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
                console.log('Vehiculo encontrado:', JSON.stringify(res, null, 3));
                result(null, res);
            }
        }
    );
}

Vehiculos.searchByModel = (model, result) => {
    const sql = `
            SELECT
                V.id,
                V.placa,
                V.numero_economico,
                V.vim,
                V.asientos,
                V.seguro,
                V.seguro_numero,
                V.brand,
                V.model,
                V.year,
                V.color,
                V.lat,
                V.lng,
                V.ubicacion 
            FROM 
                vehiculos as V
            WHERE
                V.model LIKE ?
        `;
    const searchPattern = `%${model}%`;

    db.query(
        sql,
        [searchPattern],
        (err, res) => {
            if (err) {

                console.log('Error:', err);
                result(err, null);
            }
            else {
                // Si la consulta se ejecuta correctamente, invoca la función de devolución de llamada con `null` como primer argumento y el ID del nuevo usuario como segundo argumento.
                console.log('Vehiculo(s) obtenido(s):' + JSON.stringify(res, null, 3));
                result(null, res);
            }
        }
    );
};

Vehiculos.searchByColor = (color, result) => {
    const sql = `
            SELECT
                V.id,
                V.placa,
                V.numero_economico,
                V.vim,
                V.asientos,
                V.seguro,
                V.seguro_numero,
                V.brand,
                V.model,
                V.year,
                V.color,
                V.lat,
                V.lng,
                V.ubicacion 
            FROM 
                vehiculos as V
            WHERE
                V.color LIKE ?
        `;
    const searchPattern = `%${color}%`;

    db.query(
        sql,
        [searchPattern],
        (err, res) => {
            if (err) {

                console.log('Error:', err);
                result(err, null);
            }
            else {
                // Si la consulta se ejecuta correctamente, invoca la función de devolución de llamada con `null` como primer argumento y el ID del nuevo usuario como segundo argumento.
                console.log('Vehiculo(s) obtenido(s):' + JSON.stringify(res, null, 3));
                result(null, res);
            }
        }
    );
};

Vehiculos.searchByYear = (year, result) => {

    const sql = `
            SELECT
                V.id,
                V.placa,
                V.numero_economico,
                V.vim,
                V.asientos,
                V.seguro,
                V.seguro_numero,
                V.brand,
                V.model,
                V.year,
                V.color,
                V.lat,
                V.lng,
                V.ubicacion 
            FROM 
                vehiculos as V
            WHERE
                V.year LIKE ?
        `;
    const searchPattern = `%${year}%`;

    db.query(
        sql,
        [searchPattern],
        (err, res) => {
            if (err) {

                console.log('Error:', err);
                result(err, null);
            }
            else {
                // Si la consulta se ejecuta correctamente, invoca la función de devolución de llamada con `null` como primer argumento y el ID del nuevo usuario como segundo argumento.
                console.log('Vehiculo(s) obtenido(s):' + JSON.stringify(res, null, 3));
                result(null, res);
            }
        }
    );

};

Vehiculos.searchByBrand = (brand, result) => {

    const sql = `
            SELECT
                V.id,
                V.placa,
                V.numero_economico,
                V.vim,
                V.asientos,
                V.seguro,
                V.seguro_numero,
                V.brand,
                V.model,
                V.year,
                V.color,
                V.lat,
                V.lng,
                V.ubicacion 
            FROM 
                vehiculos as V
            WHERE
                V.brand LIKE ?
        `;
    const searchPattern = `%${brand}%`;

    db.query(
        sql,
        [searchPattern],
        (err, res) => {
            if (err) {

                console.log('Error:', err);
                result(err, null);
            }
            else {
                // Si la consulta se ejecuta correctamente, invoca la función de devolución de llamada con `null` como primer argumento y el ID del nuevo usuario como segundo argumento.
                console.log('Vehiculo(s) obtenido(s):' + JSON.stringify(res, null, 3));
                result(null, res);
            }
        }
    );

};

Vehiculos.getAll = (result) => {

    const sql = `
            SELECT
                V.id,
                V.placa,
                V.numero_economico,
                V.vim,
                V.asientos,
                V.seguro,
                V.seguro_numero,
                V.brand,
                V.model,
                V.year,
                V.color,
                V.lat,
                V.lng,
                V.ubicacion 
            FROM 
                vehiculos as V
            ORDER BY 
                V.id
        `;
    db.query(
        sql,
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Vehiculo(s) encontrado(s) :', res);
                result(null, res);
            }
        }
    )

}

Vehiculos.updateLoc = (id, lat, lng, ubicacion, result) => {
    const sql = `
        UPDATE
            vehiculos
        SET
            lat = ?,
            lng = ?,
            ubicacion = ?
            
        WHERE
            id = ? 
        `;
    db.query(
        sql,
        [
            lat,
            lng,
            ubicacion,
            id
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Se agrego la localizacion del Vehiculo :', res);
                result(null, res);
            }
        }
    )
}

module.exports = Vehiculos;