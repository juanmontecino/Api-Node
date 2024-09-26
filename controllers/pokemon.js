const axios = require('axios');
const { request, response } = require('express');

// Obtener una lista de Pokémon con paginación
const getPokemons = async (req = request, res = response) => {

  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon`;
    const response = await axios.get(apiUrl);
    res.status(200).json({
      msg: 'Ok',
      data: response.data.results
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al obtener los Pokémon',
      error
    });
  }
};

// Obtener un Pokémon por ID o nombre
const getPokemon = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(apiUrl);
    res.status(200).json({
      msg: 'Ok',
      data: response.data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al obtener el Pokémon',
      error
    });
  }
};

const filterPokemon = async (req = request, res = response) => {
  const { name } = req.query;  // Cambiado a query parameter

  if (!name) {
    return res.status(400).json({
      msg: 'El parámetro "name" es obligatorio en la query string',
    });
  }

  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;  // Convierto el nombre a minúsculas por consistencia
    const response = await axios.get(apiUrl);
    res.status(200).json({
      msg: 'Ok',
      data: response.data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: `Error al obtener el Pokémon: ${name}`,
      error
    });
  }
};

module.exports = {
  getPokemons,
  getPokemon,
  filterPokemon
};
