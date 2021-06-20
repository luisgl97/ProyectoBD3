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

//Buscar un unico documento de la bd
router.get('/:id', async(req, res) => {

    const id = req.params.id;

    try {
        const estudianteBD = await Estudiante.findOne({ _id: id });
        console.log(estudianteBD);

        res.render('detalle', {
            estudiante: estudianteBD,
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
        const estudianteBD = await Estudiante.findByIdAndDelete({ _id: id });

        if (estudianteBD) {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo al eliminar'
            })
        }

        console.log(estudianteBD);

        res.render('detalle', {
            estudiante: estudianteBD,
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
        const estudianteBD = await Estudiante.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(estudianteBD)
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