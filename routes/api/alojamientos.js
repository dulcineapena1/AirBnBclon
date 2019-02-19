const router = require("express").Router();
const unicoController = require("../../controllers/alojamientoController");

// Matches with "/api/alojamientos"
router.route("/")
  .get(unicoController.findAllAlojamientos);

module.exports = router;
