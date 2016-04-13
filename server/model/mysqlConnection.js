var mysql      = require('mysql');

// parametros de conexión a mi BBDD local
var connection = mysql.createConnection({
    host     : 'db4free.net',
    user     : 'opgod_user',
    password : 'ea7b53',
    database : 'opgod'
});

connection.connect();

// Se exportan las funciones que se requieren utilizar  por otros módulos
module.exports = {
    // Muestra los ejercitos
    showArmy: function (callback) {
        connection.query('SELECT * FROM ejercitos', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    // Muestra tipos de unidad
    showUnidades: function (callback) {
        connection.query('SELECT * FROM unidades u, tipo_unidad tu WHERE  u.id_tipo=tu.tipo_id AND id_ejercito=1 ORDER BY id_tipo', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    }
}
