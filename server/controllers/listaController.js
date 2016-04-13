var mysql = require("../model/mysqlConnection");
module.exports = {
    getEjercitos: function(req, res, next) {
        mysql.showArmy(function (rows) {
            res.status(200).send(rows);
        })

    },
    getTipoUnidad: function (req, res, next) {
        res.status(200).send("op");
    }
}