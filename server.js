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

const Product = mongoose.model('Product');

// Primeira Rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native app with React',
        url: 'https://github.com/facebook/react-native',
    });

    return res.send('Hello Teste');
});

app.listen(3001);