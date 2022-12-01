const { getAllPokemonModules, postPokemonModules, getPokemonByIdModules, updatePokemonModules, deletePokemonModules } = require('./../modules/pokemonModules')

const getAllProkemonsController = async(req, res) => {

  const { name } = req.query

  try {
    const pokemon = await getAllPokemonModules(name)
    res.status(200).json(pokemon)
  } catch (error) {
    res.status(400).send({ 'error': error.message })
  }
}

const postPokemonController = async(req, res) => {
try {
  const { ...data } = req.body

  const pokemon = await postPokemonModules(data)
  res.status(200).json({message: "Pokemon Creado con Exito!!"})
} catch (error) {
  res.status(400).send({ 'error': error.message })
  }
}

const getPokemonByIdController = async(req, res) => {

  try {
  const { id } = req.params

  const pokemon = await getPokemonByIdModules(id)
  res.status(200).json(pokemon)
  } catch (error) {
    res.status(400).send({ 'error': error.message })
  }
}

const updatePokemonControlller = async(req, res) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const pokemon = await updatePokemonModules(id, data)
    res.status(200).json(pokemon)
  } catch (error) {
    res.status(400).send({ 'error': error.message })
  }
}

const delePokemonController = async(req, res) => {
  try {
    const { id } = req.params
    const pokemon = await deletePokemonModules(id)
    res.status(200).json(pokemon)
  } catch (error) {
    res.status(400).send({ 'error': error.message })
  }
}

module.exports = {
  getAllProkemonsController,
  postPokemonController,
  getPokemonByIdController,
  updatePokemonControlller,
  delePokemonController
}