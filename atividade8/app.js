const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuração do EJS e do diretório de visualizações
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração dos arquivos estáticos (Bootstrap)
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

// Rotas
const indexRoute = require('./routes/index.js/index');
const calculadoraRoute = require('./routes/calculadora');

app.use('/', indexRoute);
app.use('/calcular', calculadoraRoute);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
