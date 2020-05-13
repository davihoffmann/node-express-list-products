const express = require('express');
const mongoose = require('mongoose');

// Inicia o APP
const app = express();

// Inicia o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

// Primeira Rota
app.get('/', (req, res) => {
    res.send('Hello Teste');
});

app.listen(3001);