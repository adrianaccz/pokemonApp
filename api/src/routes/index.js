const { Router } = require('express');
const pokemonController = require('./../controllers/pokemonController')
const typesController = require('../controllers/typeController')

const router = Router();

// Routes
router
      .get('/pokemons', pokemonController.getAllProkemonsController)
      .get('/types', typesController.getPokemonTypesController)
      .get('/pokemon/:id',pokemonController.getPokemonByIdController)
      .post('/pokemon', pokemonController.postPokemonController)
      .put('/pokemon/edit/:id', pokemonController.updatePokemonControlller)
      .delete('/pokemon/:id', pokemonController.delePokemonController)

module.exports = router;
