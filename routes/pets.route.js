const express = require('express');
const pets = require('../services/pets');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "limit": req.query.limit,
  };


  try {
    const result = await pets.listPets(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await pets.createPets(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:petId', async (req, res, next) => {
  let options = { 
    "petId": req.params.petId,
  };


  try {
    const result = await pets.showPetById(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;