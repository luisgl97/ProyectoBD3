const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

router.get('/', async(req, res) => {

    try {
        const arrayProductosBD = await Producto.find();
        console.log(arrayProductosBD);
        res.render("productos", { //pintamos

            arrayProductos: arrayProductosBD

        })
    } catch (error) {
        console.log(error);
    }

})

router.get('/crear', (req, res) => {
    res.render('crear');
})

router.post('/', async(req, res) => {
    const body = req.body;

    try {
        const productoBD = new Producto(body)
        await productoBD.save()
        res.redirect('/productos')
        console.log('Producto creado:', productoBD)
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;