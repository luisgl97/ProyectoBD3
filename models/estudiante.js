const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
    nombre: String,
    universidad: String,
    codigo: String,
    sexo: String,
});

//Crear modelo
const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;