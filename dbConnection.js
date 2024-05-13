const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localhost:3306',
    user: 'a18gabmantor_gabmantor',
    password: 'Pedralbes2024',
    database: 'a18gabmantor_Matricula'

});

connection.connect((err) => {

    if(err){
        
        console.error('Error al conectar la base de datos: ' + err.stack);
        return;

    }

    console.log('Conexión exitosa a la base de datos con el ID' + connection.threadId)

});


connection.query('SELECT EMAIL, PASSWORD FROM USERS', (error, results, fields) => {

    if(error) throw error;
    console.log('Los resultados de la consulta son: ' + results);

});

connection.end();