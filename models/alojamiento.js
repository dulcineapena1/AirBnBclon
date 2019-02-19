const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlojamientoSchema = new Schema({
  title: { type: String}, 
  precio:{type:Number},
  ciudad: { type: String},
  evaluaciones:{ type: [Number]},
  description: { type: String},
  genero: { type: String},
  image:{ type: String},
  verificado: { type: Boolean},
});

const Alojamiento = mongoose.model("Alojamiento", AlojamientoSchema);

module.exports = Alojamiento;
