const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

router.get('/', async(req, res) => {

    try {
        const arrayProductosBD = await Producto.find();

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

//Buscar un unico documento de la bd
router.get('/:id', async(req, res) => {

    const id = req.params.id;

    try {
        const productoBD = await Producto.findOne({ _id: id });
        console.log(productoBD);

        res.render('detalle', {
            producto: productoBD,
            error: false
        })
    } catch (error) {
        console.log(error);

        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})
module.exports = router;