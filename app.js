//Modulos a cargar en el servidor
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    compression = require('compression'),
    http = require('http'),
    path = require('path'),
    config = require('./server/config/config'),
    lista = require('./server/controllers/listaController');
    mysql = require('./server/model/mysqlConnection');
var app = express();

app.set('port', (process.env.PORT || config.port));

app.use(compression());

/*app.use(bodyParser({
    uploadDir: __dirname + '/uploads',
    keepExtensions: true
}));*/
app.use(methodOverride());

app.use(express.static(path.join(__dirname, './public')));


app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500, err.message);
});
//Configuramos express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// **************************************************************
//   API REST DE LA APP
// **************************************************************

//Zona pública
app.get("/api/getEjercitos", lista.getEjercitos);
app.get("/api/getUnidades/:id", lista.getUnidades);



//Zona privada
//app.get("/api/private/getUsers", middleware.ensureAuthenticated, users.getUsers);

app.get('*', function(req, res){
  res.status(404).send('<h1>Tíííííííííííííííííííío no me toques la URL o te meto!!!!!!</h1>');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

