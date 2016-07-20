'use strict';

const express = require('express');
const router = express.Router();
const Organism = require('./organisms');

const Create = require('./brainCreate')(Organism);
const Find = require('./brainFind')(Organism);
const FindOne = require('./brainFindOne')(Organism);
const FindBySimbolo = require('./brainFindBySimbolo')(Organism);
const Update = require('./brainUpdate')(Organism);
const Remove = require('./brainRemove')(Organism);

router.get('/', Find);
router.get('/:id', FindOne);
router.get('/simbolo/:nome', FindBySimbolo);
router.post('/', Create);
router.put('/:id', Update);
router.delete('/:id', Remove);

module.exports = router;