const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o APP
const app = express();
app.use(express.json());
app.use(cors());

// Exemplo de Middleware (GLOBAL) de LOG
app.use((req, res, next) => {
    console.time('Request')
    console.log(`Método: ${req.method}; URL: ${req.url};`);
    next();
    console.timeEnd('Request');
})

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