const express = require('express');
const app = express();

// POST # Usar o Insomnia para testar!
app.use(express.json());
const projects = [];

app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
  };

  projects.push(project);

  return res.json(project);
});

// GET
app.get("/", async (req, res) => {
    res.send("Teste de Rota Softex!");
});

app.post("/", (req,res) => {
  res.send("Teste de post")
  console.log("Sevidor POST");
});

// PORTA 8080
app.listen(8080, () => {
    console.log("Sevidor iniciado!! http://localhost:8080");
});
