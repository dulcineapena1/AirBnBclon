const router = require("express").Router();
const alojamientoRoutes = require("./alojamientos");
const estanciasRoutes = require("./estancias");
const experienciasRoutes = require("./experiencias");

// Routes
router.use("/alojamientos", alojamientoRoutes);
router.use("/estancias", estanciasRoutes);
router.use("/experiencias", experienciasRoutes);

module.exports = router;
