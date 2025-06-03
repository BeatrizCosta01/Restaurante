const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '002007',
    database: 'saboroso'
});

conn.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco:', err);
    } else {
        console.log('MySQL conectado com sucesso!');
    }
});

module.exports = conn