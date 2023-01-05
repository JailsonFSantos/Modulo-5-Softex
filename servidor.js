var http = require('http');

//Criando o Objeto:
http.createServer(function (req, res) {
  res.write('Hello World!'); // Resposta para o cliente 
  res.end(); // Fim da resposta
}).listen(8080); // porta na qual sera recebida a requisicao 
// Para roda o projeto basta abrir o terminal e digitar node servidor.js
// depois entrar no endereco localhost:8080