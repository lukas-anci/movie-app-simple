const express = require('express');

const app = express();
const PORT = 3002;

const mongoose = require('mongoose');

const { mongoDbString } = require('./config/config');

// prisijungimas prie duomenu bazes
mongoose
  .connect(mongoDbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
    app.listen(PORT, console.log(`backEnd online on port ${PORT}`));
  })
  .catch((err) => console.error(err.message));
