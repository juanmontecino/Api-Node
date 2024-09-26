## Pokémon API

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

#### Parámetros de Ruta:
cantidad (obligatorio): El número de Pokémon que se desean obtener.
#### Ejemplo de Request:

GET /api/v1/pokemons/10
