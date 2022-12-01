const { getAllPokeServices } = require('./../services/pokemonService');
const { getPokemonFromDB, postPokemonDB, updatePokemonDB, deletePokemonDB } = require('../database/pokemonDB');

const getAllPokemonModules = async (name) =>{

  try {
  const allApiPokemons = await getAllPokeServices();
  const allDBPokemons = await getPokemonFromDB()
  //console.log("pokemos de la db:******",allDBPokemons);
  const allPokemons = allApiPokemons.concat(allDBPokemons)
  //console.log("allPokemons------",allPokemons);
  const pokemonsAPI = allPokemons.map((atribute)=>{
  const pokemonTypes = atribute.types.map(e=> {
    if(e.type){
      return e.type.name
    }
    else{
      return e.name
    }
    })

    return {
      id: atribute.id,
      name: atribute.name,
      types: pokemonTypes,   //atribute.types?.map(e=> e.type?.name) || atribute.types?.map(e=> e.name),
      img: atribute.sprites?.front_default || atribute.img,
    }
  })
  //console.log("pokemon in db: ------",pokemonsAPI);

  if(name){
    let pokemon = pokemonsAPI.filter((e) => e.name.toLowerCase().includes(name))
    return pokemon
  }

  return pokemonsAPI;
  } catch (error) {
    throw error;
  }
}

const getPokemonByIdModules = async(id) => {

  try {
    const allApiPokemons = await getAllPokeServices();
    const allDBPokemons = await getPokemonFromDB()
    const allPokemons = allApiPokemons.concat(allDBPokemons)
    const pokemons = allPokemons.map((atribute)=>{
      const pokemonTypes = atribute.types.map(e=> {
        if(e.type){
          return e.type.name
        }
        else{
          return e.name
        }
      })
      return {
        id: atribute.id,
        name: atribute.name,
        types: pokemonTypes,
        img: atribute.sprites?.front_default || atribute.img,
        weight: atribute.weight,
        height: atribute.height,
        life: atribute.life || atribute.stats[0].base_stat,
        attack: atribute.attack || atribute.stats[1].base_stat,
        defense: atribute.defense || atribute.stats[2].base_stat,
        speed: atribute.speed || atribute.stats[5].base_stat
      }
    })

    if(id){
      return pokemons.filter(e=> e.id == id)
    }
  } catch (error) {
    throw error
  }
}

const postPokemonModules = async(data) => {
  try {
    //console.log(data);
    if(!data.name) return '!El parametro nombre es requerido¡';
    const createPokemon = await postPokemonDB(data);
    return createPokemon;
  } catch (error) {
    throw error;
  }
}

const updatePokemonModules = async(id, data) => {
  try {
    if(!data) return "Ingrese información para actualizar"
    const updatePokemon = await updatePokemonDB(id, data)
    return getPokemonByIdModules(id)
  } catch (error) {
    throw error;
  }
}

const deletePokemonModules = async(id) => {
  try {
    const deletePokemon = await deletePokemonDB(id)
    return getAllPokemonModules()
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPokemonModules,
  getPokemonByIdModules,
  postPokemonModules,
  updatePokemonModules,
  deletePokemonModules
}