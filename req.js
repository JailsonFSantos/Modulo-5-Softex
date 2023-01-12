const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Método http get');
});

app.post('/', (req, res) => {
    res.send('Método http post');
});

app.put('/', (req, res) => {
    res.send('Método http put');
});

app.delete('/', (req, res) => {
    res.send('Método http delete');
});


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})