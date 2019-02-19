const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienciaSchema = new Schema({
  title: { type: String}, 
  ciudad: { type: String},
  pais: { type: String},
  description: { type: String},
  image:{ type: String},
  superhost:{ type: Boolean},
  valoraciones: { type: String},
});

const Experiencia = mongoose.model("Experiencia", ExperienciaSchema);

module.exports = Experiencia;
