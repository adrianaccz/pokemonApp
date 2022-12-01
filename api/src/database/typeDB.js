const { Type } = require('../db')

const addTypesInDB = async(data) =>{
  try {

    data.forEach((e) => {
      Type.findOrCreate({
        where : {name: e.name}
      })
    });
    const allTypes = await Type.findAll()
    return allTypes

  } catch (error) {
    throw error
  }
}

module.exports = {
  addTypesInDB
}