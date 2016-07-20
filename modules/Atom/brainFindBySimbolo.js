'use strict';

module.exports = (Organism) => {

  const callbackExpress = require('./organisms/organelles/callbackExpress');

  return (req, res) => {
    let query = { simbolo: req.params.nome };
    // console.log('query', query)
    Organism.findOne(query, (err, data) => {
      callbackExpress(err, data, res);
    });
  };
};