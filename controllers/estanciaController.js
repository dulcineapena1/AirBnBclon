const db = require("../models");

module.exports = {
  findAllEstancias: function(req, res) {
    db.Estancia
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
