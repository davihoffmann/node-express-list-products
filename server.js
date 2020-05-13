const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o APP
const app = express();

// Inicia o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

// Adiciona os models
requireDir("./src/models");


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);