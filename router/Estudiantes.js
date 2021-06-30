const express = require('express');
const router = express.Router();

const Estudiante = require('../models/estudiante');

router.get('/', async(req, res) => {

    try {
        const arrayEstudiantesBD = await Estudiante.find();

        res.render("estudiantes", { //pintamos

            arrayEstudiantes: arrayEstudiantesBD

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
        const estudianteBD = new Estudiante(body)
        await estudianteBD.save()
        res.redirect('/estudiantes')
        console.log('Estudiante creado:', estudianteBD)
    } catch (error) {
        console.log(error)
    }

})

<<
<< << < HEAD: router / Productos.js
    //Buscar un unico documento de la bd
    ===
    === =
    //Buscar un unica estudiante de la bd
    >>>
    >>> > af060d9fac10c05d38f8e6c2b0aec4a4032c06f6: router / Estudiantes.js
router.get('/:id', async(req, res) => { // Vamos a leer una ruta dinamica

    const id = req.params.id;

    try {

        const productoBD = await Producto.findOne({ _id: id }); //Espera al esquema Producto y busca el primer Producto con esa id
        console.log(productoBD);



        res.render('informacion', {
            estudiante: estudianteBD,
            error: false
        })
    } catch (error) {
        console.log(error);

        res.render('informacion', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async(req, res) => {
            const id = req.params.id;
            try { <<
                << << < HEAD: router / Productos.js
                const productoBD = await Producto.findByIdAndDelete({ _id: id }); //Esperamos al modelo Producto y Verifica si el id del producto esta en la BD y se elimina

                if (productoBD) { //Si el producto existe
                    ===
                    === =
                    const estudianteBD = await Estudiante.findByIdAndDelete({ _id: id }); //Esperamos al modelo estudiante y Verifica si el id del estudiante esta en la BD

                    if (estudianteBD) { //Si el estudiante existe
                        >>>
                        >>> > af060d9fac10c05d38f8e6c2b0aec4a4032c06f6: router / Estudiantes.js
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

                    <<
                    << << < HEAD: router / Productos.js
                        // console.log(productoBD);
                        ===
                        === =
                        // console.log(estudianteBD);
                        >>>
                        >>> > af060d9fac10c05d38f8e6c2b0aec4a4032c06f6: router / Estudiantes.js

                    res.render('informacion', {
                        estudiante: estudianteBD,
                        error: false
                    })
                } catch (error) {
                    console.log(error);

                    res.render('informacion', {
                        error: true,
                        mensaje: 'No se encuentra el id seleccionado'
                    })
                }
            })

        router.put('/:id', async(req, res) => {
            const id = req.params.id;
            const body = req.body; //para capturar los campos de nuestro input (nombre,universidad,etc)
            try { <<
                << << < HEAD: router / Productos.js
                const productoBD = await Producto.findByIdAndUpdate(id, body, { useFindAndModify: false })
                    // console.log(productoBD)
                    ===
                    === =
                    const estudianteBD = await Estudiante.findByIdAndUpdate(id, body, { useFindAndModify: false })
                        // console.log(estudianteBD)
                        >>>
                        >>> > af060d9fac10c05d38f8e6c2b0aec4a4032c06f6: router / Estudiantes.js
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
        }) module.exports = router;