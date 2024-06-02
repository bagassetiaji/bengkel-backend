const express = require('express');
const router = express.Router();
const controllerSparepart = require('./controller_sparepart');
const controllerMotor = require('./controller_motor');

// Rute untuk sparepart
router.get('/spareparts', controllerSparepart.findAll);
router.post('/spareparts', controllerSparepart.create);
router.get('/spareparts/:id', controllerSparepart.findById);
router.put('/spareparts/:id', controllerSparepart.update);
router.delete('/spareparts/:id', controllerSparepart.delete);
router.get('/spareparts/name/:name', controllerSparepart.findByName);

// Rute untuk motor
router.get('/motors', controllerMotor.findAll);
router.post('/motors', controllerMotor.create);
router.get('/motors/:id', controllerMotor.findById);
router.put('/motors/:id', controllerMotor.update);
router.delete('/motors/:id', controllerMotor.delete);

module.exports = router;
