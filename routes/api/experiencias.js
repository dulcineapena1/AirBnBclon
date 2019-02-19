const router = require("express").Router();
const unicoController = require("../../controllers/experienciaController");

// Matches with "/api/experiencias"
router.route("/")
  .get(unicoController.findAllExperiencias);

module.exports = router;
