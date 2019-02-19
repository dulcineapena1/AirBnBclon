const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstanciaSchema = new Schema({
  title: { type: String}, 
  ciudad: { type: String},
  pais: { type: String},
  description: { type: String},
  image:{ type: String},
  superhost:{ type: Boolean},
  valoraciones: { type: String},
});

const Estancia = mongoose.model("Estancia", EstanciaSchema);

module.exports = Estancia;
