const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String,
});

//Crear modelo
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;