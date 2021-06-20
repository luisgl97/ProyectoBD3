const express = require("express");
const bodyParser = require('body-parser'); //Nos servira para leer el formulario o los campos que llenaremos a partir de la interfaz
const app = express();
const port = 3000;

// analizar la aplicaciones con formulario
app.use(bodyParser.urlencoded({ extended: false }));
// analizar la aplicación / json
app.use(bodyParser.json());

//Coneccion a base de datos
const mongoose = require('mongoose');

const user = 'tiendavirtual';
const password = 'bdtiendavirtual';
const bdname = 'Inscripcion'
const uri = `mongodb+srv://${user}:${password}@tienda-virtual.4kpkz.mongodb.net/${bdname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e));


//motor de plantillas .ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')



app.use(express.static(__dirname + "/public")); //Middleware: Permitira ejecutar una funcion antes que se haga las solicitudes

//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/estudiantes', require('./router/Estudiantes'))


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo del sitio web",
    });
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);

});