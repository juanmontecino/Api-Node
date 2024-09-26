# Pokémon API

Esta es una API construida con **Node.js** y **Express** que permite obtener información sobre Pokémon utilizando la [PokeAPI](https://pokeapi.co/). Puedes listar Pokémon, obtener detalles de un Pokémon específico y filtrar Pokémon por nombre usando query parameters.

## Endpoints

Todos los endpoints deben usar el prefijo `/api/v1/`.

#### URL: `/pokemons`
Este endpoint devuelve información sobre un Pokémon específico.

#### Query Parameters:
- **name** (obligatorio): El nombre del Pokémon que se desea buscar.

#### Ejemplo de Request:

GET /api/v1/pokemons?name=charmander

#### Obtener lista de Pokémon
URL: /pokemons
Este endpoint devuelve una lista paginada de Pokémon.

#### Query Parameters:
limit (opcional): El número máximo de Pokémon a devolver (por defecto es 50).
offset (opcional): Desplazamiento en la lista para la paginación (por defecto es 0).

#### Ejemplo de Request:
GET /api/v1/pokemons?limit=10&offset=0

#### Pokémon por cantidad
URL: /pokemons/:cantidad
Este endpoint devuelve una cantidad específica de Pokémon, comenzando desde el primero.

#### Parámetros de Ruta:
cantidad (obligatorio): El número de Pokémon que se desean obtener.
#### Ejemplo de Request:

GET /api/v1/pokemons/10
