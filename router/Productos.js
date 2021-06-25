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
router.get('/:id', async(req, res) => { // Vamos a leer una ruta dinamica

    const id = req.params.id;

    try {
        const productoBD = await Producto.findOne({ _id: id }); //Espera al esquema Producto y busca el primer Producto con esa id
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

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const productoBD = await Producto.findByIdAndDelete({ _id: id }); //Esperamos al modelo Producto y Verifica si el id del producto esta en la BD y se elimina

        if (productoBD) { //Si el producto existe
            res.json({ //Hacemos una respuesta en json
                estado: true,
                mensaje: 'eliminado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo al eliminar'
            })
        }

        // console.log(productoBD);

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

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body; //para capturar los campos de nuestro input (nombre,marca,etc)
    try {
        const productoBD = await Producto.findByIdAndUpdate(id, body, { useFindAndModify: false })
            // console.log(productoBD)
        res.json({
            estado: true,
            mensaje: 'Editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Fallamos!!'
        })
    }
})
module.exports = router;