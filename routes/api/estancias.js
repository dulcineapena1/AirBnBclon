const router = require("express").Router();
const unicoController = require("../../controllers/estanciaController");

// Matches with "/api/estancias"
router.route("/")
  .get(unicoController.findAllEstancias);

module.exports = router;
