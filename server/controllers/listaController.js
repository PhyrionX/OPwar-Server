var mysql = require("../model/mysqlConnection");
module.exports = {
    getEjercitos: function(req, res, next) {
        mysql.showArmy(function (rows) {
            res.status(200).send(rows);
        })

    },
    getUnidades: function (req, res, next) {
        mysql.showUnidades(req.params.id, function (rows) {
            console.log(rows);
            var response = [];

            for (var i = 0; i < rows.length; i++) {
                var unidad = {};
                unidad.id_unidad = rows[i].id_unidad;
                unidad.nombre = rows[i].nombre;
                unidad.movimiento = rows[i].movimiento;
                unidad.habilidad_armas = rows[i].habilidad_armas;
                unidad.habilidad_proyectiles = rows[i].habilidad_proyectiles;
                unidad.fuerza = rows[i].fuerza;
                unidad.resistencia = rows[i].resistencia;
                unidad.heridas = rows[i].heridas;
                unidad.iniciativa = rows[i].iniciativa;
                unidad.ataques = rows[i].ataques;
                unidad.liderazgo = rows[i].liderazgo;
                unidad.puntos = rows[i].puntos;
                unidad.tamanyoMinimo = rows[i].tamanyo_minimo;
                unidad.id_ejercito = rows[i].id_ejercito;
                unidad.tipo_id = rows[i].tipo_id;
                unidad.tipo = rows[i].tipo;
                unidad.porcentaje = rows[i].porcentaje;
                response.push(unidad);
            }
            res.status(200).json({unidades: response});
        })
    }
}