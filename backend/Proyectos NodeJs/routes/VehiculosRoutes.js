
const vehiculosController = require('../controllers/vehiculosController');

module.exports = (app, upload) => {


    app.post('/api/vehiculos/create', vehiculosController.create);

    app.delete('/api/vehiculos/delete/:id', vehiculosController.delete);

    app.put('/api/vehiculos/update',  vehiculosController.update);

    app.get('/api/vehiculos/findById/:id',  vehiculosController.findById);

    app.get('/api/vehiculos/searchByModel/:model', vehiculosController.searchByModel);

    app.get('/api/vehiculos/searchByYear/:year', vehiculosController.searchByYear);

    app.get('/api/vehiculos/searchByBrand/:brand', vehiculosController.searchByBrand);

    app.get('/api/vehiculos/getAll', vehiculosController.getAll);

    app.put('/api/vehiculos/updateLoc', vehiculosController.updateLoc)

    

}