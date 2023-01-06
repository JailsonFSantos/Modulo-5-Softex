const express = require('express');

const app = express();

app.get('/', (req, res) =>
res.send("<h1>Criando Rotas</h1><p>Rota -> '/'")
);

app.get('/sobre', (req, res) =>
res.send("<h1>Nova Rota</h1>")
);

app.get('/users/:nome', (req, res) => //recebe o parâmetro name
    res.send('Usuário:' + req.params.nome) //exibe o parametro name
);

app.listen(8080, () => 
console.log('Servidor iniciado na porta 8080')
);
