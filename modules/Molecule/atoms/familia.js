'use strict'

const Name = 'nome'

module.exports = {
  type: String
, validate: require('./../hadrons/'+Name+'ValidateMongoose')
}