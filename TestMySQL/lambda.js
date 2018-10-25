const mysql = require('mysql');

exports.handler = function (event, context, callback) {

    var connection = mysql.createConnection({
        host: 'mysql-rfam-public.ebi.ac.uk',
        user: 'rfamro',
        port: 4497,
        database: 'Rfam'
    });

    connection.connect();

    connection.query('SELECT * FROM family LIMIT 5', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(null, { results });
    });

    connection.end();
}