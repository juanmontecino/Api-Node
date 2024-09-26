const { Router } = require('express');
const { getPokemons, getPokemon } = require('../controllers/pokemon');

const router = Router();

// Ruta para obtener la lista de Pokémon
router.get('/', getPokemons);

// Ruta para obtener un Pokémon por ID o nombre
router.get('/:id', getPokemon);

module.exports = router;
