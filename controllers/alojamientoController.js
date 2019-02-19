const db = require("../models");

module.exports = {
  findAllAlojamientos: function(req, res) {
    db.Alojamiento
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
