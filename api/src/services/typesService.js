const fetch = require('node-fetch');

const getTypesApiService = async() => {

  try {
  const url = 'https://pokeapi.co/api/v2/type';

  const TypesFromAPi = await fetch(url)
  .then(response => response.json())
  .then(data => data);
  //console.log(TypesFromAPi);
  return TypesFromAPi.results;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getTypesApiService
}