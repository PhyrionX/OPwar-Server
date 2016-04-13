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
    },
   
    // Saca el máximo id de la BBDD lo utilizo para crear un MD5 para guardar los archivos
    getMaxId: function(callback) {
        connection.query('SELECT max(id_nota) AS id_nota FROM notas', function (err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    // Se inserta una nota con ruta de un fichero al que acceder
    insertMemo: function(fecha, texto, ruta, callback) {
        //var sql = 'INSERT INTO exhibits (title) VALUES ("fecha")';
        connection.query('INSERT INTO notas (fecha, texto, fichero) VALUES ("' + fecha + '", "' + texto + '", "' + ruta + '")', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    // Se inserta una nota sin ruta de un fichero al que acceder
    insertMemo2: function(fecha, texto, callback) {
        //var sql = 'INSERT INTO exhibits (title) VALUES ("fecha")';
        connection.query('INSERT INTO notas (fecha, texto) VALUES ("' + fecha + '", "' + texto + '")', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    }
}
