const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    marca: String,
    modelo: String,
    producto: String,
    caracteristicas: String,
    precio: Number,
});

//Crear modelo
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;