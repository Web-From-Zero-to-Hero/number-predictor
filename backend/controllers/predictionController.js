const Predictor = require('../services/predictor.js');

class PredictionController {
    async predict(request, reply) {
        try {
            const predictor = new Predictor();
            reply.status(200).json(await predictor.identifyImage(request.body.image));
        } catch (error) {
            reply.status(500).json( error );
        }
    }
}


module.exports = {
    PredictionController,
}