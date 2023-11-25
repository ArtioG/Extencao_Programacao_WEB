const sqlite3 = require('sqlite3');

class Database {
    constructor() {
        this.db = new sqlite3.Database('users.db'); // Use um arquivo real para armazenar os dados
        this.initialize();
    }

    initialize() {
        this.db.serialize(() => {
            this.db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
            this.db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, productName TEXT, productValue TEXT)');
        });
    }

    insertUser(username, password, callback) {
        this.db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], callback);
    }

    findUser(username, password, callback) {
        this.db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], callback);
    }

    insertProduct(productName, productValue, callback) {
        this.db.run('INSERT INTO products (productName, productValue) VALUES (?, ?)', [productName, productValue], callback);
    }

    getAllProducts(callback) {
        this.db.all('SELECT * FROM products', callback);
    }
}

module.exports = new Database();
