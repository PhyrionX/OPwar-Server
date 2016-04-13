var mysql = require("../model/mysqlConnection");
module.exports = {
    getEjercitos: function(req, res, next) {
        mysql.showArmy(function (rows) {
            res.status(200).send(rows);
        })

    },
    getUnidades: function (req, res, next) {
        mysql.showUnidades(req.params.id, function (rows) {
            res.status(200).send(rows);
        })
    }
}