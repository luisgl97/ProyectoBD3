// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('estoy respondiendo a tu solicitud');
// });

// const puerto = 3000;
// server.listen(puerto, () => {
//     console.log('Escuchando solicitudes');
// })

const express = require("express");
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public")); //Middleware: Estamos ejecutando una funcion antes que se haga las solicitudes


app.get("/", (req, res) => {
    res.render("index", { titulo: "mi titulo dinamico" });
});

app.get('/servicios', (req, res) => {
    res.render("servicios", { tituloServicios: "Este es un mensaje dinamico de servicios" });
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo del sitio web",
    });
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);

});