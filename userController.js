const db = require('../models/db');

const userController = {
    cadastrar: (req, res) => {
        const { username, password } = req.body;
        db.insertUser(username, password, (err) => {
            if (err) {
                return console.error(err.message);
            }
            res.redirect('/login');
        });
    },

    autenticar: (req, res) => {
        const { username, password } = req.body;
        db.findUser(username, password, (err, user) => {
            if (err) {
                return console.error(err.message);
            }
            if (user) {
                // Autenticação bem-sucedida, redirecionar para a página de cadastro de produtos
                res.redirect('/cadastroProduto');
            } else {
                res.send('Falha na autenticação. Verifique suas credenciais.');
            }
        });
    },

    cadastrarProduto: (req, res) => {
        const isAuthenticated = true; // Simulação de autenticação

        if (!isAuthenticated) {
            return res.send('Acesso não autorizado. Faça login.');
        }

        const { productName, productValue } = req.body;

        // Adicionar produto ao banco de dados
        db.insertProduct(productName, productValue, (err) => {
            if (err) {
                return console.error(err.message);
            }
            res.redirect('/produtos');
        });
    },

    listarProdutos: (req, res) => {
        // Buscar todos os produtos no banco de dados
        db.getAllProducts((err, products) => {
            if (err) {
                return console.error(err.message);
            }

            // Renderizar a página de produtos com a lista de produtos
            res.render('produtos', { products });
        });
    },

    deletarProduto: (req, res) => {
        const isAuthenticated = true; // Simulação de autenticação
    
        if (!isAuthenticated) {
            return res.send('Acesso não autorizado. Faça login.');
        }
    
        const productId = req.body.productId;
    
        // Remover produto do banco de dados
        db.db.run('DELETE FROM products WHERE id = ?', [productId], (err) => {
            if (err) {
                return console.error(err.message);
            }
            res.redirect('/produtos');
        });
    },

    alterarProduto: (req, res) => {
        const isAuthenticated = true; // Simulação de autenticação
    
        if (!isAuthenticated) {
            return res.send('Acesso não autorizado. Faça login.');
        }
    
        const productId = req.query.productId;
    
        // Obter informações sobre o produto do banco de dados
        db.db.get('SELECT * FROM products WHERE id = ?', [productId], (err, product) => {
            if (err) {
                return console.error(err.message);
            }
    
            // Renderizar a página de alteração de valor do produto
            res.render('alterarProduto', { product });
        });
    },

    salvarAlteracaoProduto: (req, res) => {
        const isAuthenticated = true; // Simulação de autenticação
    
        if (!isAuthenticated) {
            return res.send('Acesso não autorizado. Faça login.');
        }
    
        const productId = req.body.productId;
        const newProductValue = req.body.newProductValue;
    
        // Atualizar o valor do produto no banco de dados
        db.db.run('UPDATE products SET productValue = ? WHERE id = ?', [newProductValue, productId], (err) => {
            if (err) {
                return console.error(err.message);
            }
            res.redirect('/produtos');
        });
    },
};

module.exports = userController;
