const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localhost:3306',
    user: 'a18gabmantor_gabmantor',
    password: 'Pedralbes2024',
    database: 'a18gabmantor_Matricula'

});

connection.connect((err) => {

    if(err){

        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;

    }

    console.log('Exicto en la conexión' + connection.threadId);

});

connection.query('SELECT * FROM USUARIOS WHERE DNI = ? OR PASAPORTE = ? OR NIE = ? OR TSI = ? LIMIT 1', (error, results, fields) => {

    if(error) throw error;
    console.log('Resultados: ', results);

});

connection.end();