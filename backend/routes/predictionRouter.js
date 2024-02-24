const express = require('express');
const predictionController = require('../controllers/predictionController.js');
const upload = require('../services/upload.js');


const router = express.Router();
const controller = new predictionController.PredictionController();

router.post('/', upload.single('image'), controller.predict);


module.exports = router;