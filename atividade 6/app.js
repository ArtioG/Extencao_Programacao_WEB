const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configurar o middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar a view engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rota para a página principal com o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para lidar com o envio do formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;
  res.render('dados', { nome, endereco, telefone, dataAgendamento });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
