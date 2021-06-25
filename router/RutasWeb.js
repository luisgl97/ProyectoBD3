const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "Tienda Virtual" });
})

// router.get('/servicios', (req, res) => {
//     res.render("servicios", { tituloServicios: "Este es un mensaje dinamico" })
// })

module.exports = router;