const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("productos", {
        arrayProductos: [
            { id: 'jdjdjd', nombre: 'pc', descripcion: 'pc descripcion', precio: '100' },
            { id: 'jdjdjdss', nombre: 'laptop', descripcion: 'laptop descripcion', precio: '1000' },
        ]
    })
})

module.exports = router;