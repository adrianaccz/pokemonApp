const { pokemonTypesModule } = require('../modules/typeModules')

const getPokemonTypesController = async(req, res) => {
  try {
    const pokemonTypes = await pokemonTypesModule()
    res.status(200).json(pokemonTypes)
  } catch (error) {
    res.status(400).send({'error': error.message})
  }
}

module.exports = {
  getPokemonTypesController
}