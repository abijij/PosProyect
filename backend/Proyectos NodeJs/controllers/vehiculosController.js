const Vehiculos = require('../models/vehiculos.js');


module.exports = {

    create  (req, res)  {
        const vehiculoData = req.body;
    
        Vehiculos.create(vehiculoData, (err, idVehiculo) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del vehículo',
                    error: err
                });
            }
    
            return res.status(201).json({
                success: true,
                message: 'El vehículo se almacenó correctamente',
                idVehiculo: idVehiculo
            });
        });
    },


    update(req, res){
        const product = req.body;
        Vehiculos.update(product, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del vehiculo',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El vehiculo se actualizo correctamente',
               data: data
            });
        })
    },




    delete(req, res){

        const id = req.params.id;

        Vehiculos.delete(id, (err, id) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de eliminar el vehiculo',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'El  vehiculo se elimino correctamente',
               data: `${id}`
            });   

        });
    },


    findById(req, res) {
        const id = req.params.id;
        Vehiculos.findById(id, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con la obtencion del producto',
                    error: err
                });
            }

            return res.status(201).json(data);

        });
    },

    searchByModel(req, res) {
        const model = req.params.model;

        Vehiculos.searchByModel(model, (err,data) =>{
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los productos',
                    error: err
                });
            }

            return res.status(201).json(data);
        })
           
    },
  
    searchByColor(req, res) {
        const color = req.params.color;

        Vehiculos.searchByColor(color, (err,data) =>{
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los productos',
                    error: err
                });
            }

            return res.status(201).json(data);
        })
    },
            


    searchByYear(req, res) {
        const year = req.params.year;

        Vehiculos.searchByYear(year, (err,data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los productos',
                    error: err
                });
            }

            return res.status(201).json(data);
        })
           
    },

    searchByBrand(req, res) {
        const brand = req.params.brand;

        Vehiculos.searchByBrand(brand,(err,data) =>{
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar los productos',
                    error: err
                });
            }

            return res.status(201).json(data);

        });
    },

    getAll(req, res) {
        Vehiculos.getAll((err, data)=>{
        if (err) {
            return res.status(501).json({
                success: false,
                message: 'Hubo un error al momento de listar de los vehiculos',
                error: err
            });
        }
        return res.status(201).json(data);

    });
},

    updateLoc(req, res){
        const id = req.body.id;
        const lat = req.body.lat;
        const lng = req.body.lng;
        const ubicacion = req.body.ubicacion;

        Vehiculos.updateLoc(id, lat, lng, ubicacion, (err,data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con la actualizacio  del vehiculo',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'El Vehiculo se actualizo correctamente',
                data: id
            });
        });
    }
}
    


