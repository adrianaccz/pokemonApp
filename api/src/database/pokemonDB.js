const { Pokemon, Type } = require('../db');

const getPokemonFromDB = async() => {
  try {

  const dbCall = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'],
      through: {
          attributes: []
      }
    }
  })
  //console.log("base de datos: ***",dbCall[0]);
  return dbCall;

  } catch (error) {
    throw error
  }
}

const postPokemonDB = async(data) => {
  try {
    const pokemonCreated = await Pokemon.create({...data})      // trae toda la data, puediera ser{name, img,..}

    const typeInDB = await Type.findAll({
      where: {name: data.types}
    })

    pokemonCreated.addType(typeInDB)

    return pokemonCreated
  } catch (error) {
    throw error
  }
}

const updatePokemonDB = async(id, data) => {
  try {
    const pokemonUpdated = await Pokemon.update({
      name: data.name,
      types: data.types,
      img: data.img,
      weight: data.weight,
      height: data.height,
      life: data.life,
      attack: data.attack,
      defense: data.defense,
      speed: data.speed
    }, { where: {id: id}
    })
  } catch (error) {
    throw error
  }
  //console.log("pokemon actualizado:****", pokemonUpdated);
}

const deletePokemonDB = async(id) => {
  try {
    Pokemon.destroy({
      where: {id: id}
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPokemonFromDB,
  postPokemonDB,
  updatePokemonDB,
  deletePokemonDB
}

