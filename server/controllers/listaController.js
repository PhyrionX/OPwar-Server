var mysql = require("../model/mysqlConnection");
module.exports = {
    getEjercitos: function(req, res, next) {
        mysql.showArmy(function (rows) {
            res.status(200).send(rows);
        })

    },
    getUnidades: function (req, res, next) {
        mysql.showUnidades(function (rows) {
            res.status(200).send(rows);
        })
    }
}