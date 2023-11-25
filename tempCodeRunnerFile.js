const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

app.post('/cadastrar', userController.cadastrar);
app.post('/autenticar', userController.autenticar);
app.post('/deletarProduto', userController.deletarProduto);

app.get('/alterarProduto', userController.alterarProduto);
app.post('/salvarAlteracaoProduto', userController.salvarAlteracaoProduto);

// Novas rotas para produtos
app.get('/cadastroProduto', (req, res) => {
    res.render('cadastroProduto');
});

app.post('/cadastrarProduto', userController.cadastrarProduto);

app.get('/produtos', userController.listarProdutos);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});