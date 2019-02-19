const db = require("../models");

module.exports = {
  findAllExperiencias: function(req, res) {
    db.Experiencia
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
