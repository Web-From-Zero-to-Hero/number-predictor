require('dotenv').config();
const express = require('express');
const predictionRouter = require('../routes/predictionRouter.js');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.use('/prediction', predictionRouter);