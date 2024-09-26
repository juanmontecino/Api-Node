const { Router } = require('express');
const { filterPokemon, getPokemons, getPokemon } = require('../controllers/pokemon');

const router = Router();

router.get('/filter', filterPokemon);

// Ruta para obtener la lista de Pokémon
router.get('/', getPokemons);

// Ruta para obtener un Pokémon por ID o nombre
router.get('/:id', getPokemon);

module.exports = router;
