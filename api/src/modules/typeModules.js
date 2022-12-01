const { getTypesApiService } = require('../services/typesService')
const { addTypesInDB } = require('../database/typeDB')


const pokemonTypesModule = async() => {
  try {
    const types = await getTypesApiService()
    const alltypes = types.map((t) => {
      return {
        name: t.name
      }
    })

    const addTypes = await addTypesInDB(alltypes)
    return addTypes

  } catch (error) {
    throw error
  }
}

module.exports = {
  pokemonTypesModule
}