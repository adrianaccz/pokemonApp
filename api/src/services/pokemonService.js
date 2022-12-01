const axios = require('axios');
const fetch = require('node-fetch')

//call API

const getAllPokeServices = async(name) =>{
  try {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100'

  const pokeApi = await fetch(url)
    .then(response => response.json())
    .then(data => data);
    let allPokemons = await Promise.all(
      pokeApi.results.map(async  e=> {
            let res = await fetch(e.url)
                .then(response => response.json())
                .then(data => data);
                  return res}))

    //console.log(allPokemons)
  return allPokemons
  } catch (error) {
    throw error
  }

}

module.exports ={
  getAllPokeServices
}