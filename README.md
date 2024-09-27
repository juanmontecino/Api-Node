# API Endpoints Documentation

All endpoints must use the prefix `/api/v1/`.

## Noticias

### 1. Obtener Noticias Filtradas por Fecha

**URL:** `/api/v1/noticias`  
**Method:** `GET`  
**Description:** Returns up to 50 news articles related to Argentina, filtered by a date range.

**Query Parameters:**
- `desde` *(optional)*: Start date in the format `YYYY-MM-DD`.
- `hasta` *(optional)*: End date in the format `YYYY-MM-DD`.

**Example Request:**
```bash
GET /api/v1/noticias?desde=2024-01-01&hasta=2024-09-01
```

---

### 2. Obtener Noticias por Cantidad

**URL:** `/api/v1/noticias/:cantidad`  
**Method:** `GET`  
**Description:** Returns a specific number of news articles about Argentina.

**Path Parameters:**
- `cantidad`: The number of news articles to return.

**Example Request:**
```bash
GET /api/v1/noticias/10
```

---

## Canciones

### 1. Obtener Canciones por Género

**URL:** `/api/v1/canciones`  
**Method:** `GET`  
**Description:** Returns 50 of the most popular songs, by default of the rock genre.

**Query Parameters:**
- `genero` *(optional)*: Specifies the genre of the songs. Defaults to rock.

**Example Request:**
```bash
GET /api/v1/canciones?genero=pop
```

---

### 2. Obtener Canciones por Cantidad

**URL:** `/api/v1/canciones/:cantidad`  
**Method:** `GET`  
**Description:** Returns a specified number of songs from the preset genre "RKT".

**Path Parameters:**
- `cantidad`: The number of songs to return.

**Example Request:**
```bash
GET /api/v1/canciones/10
```

---

## Libros

### 1. Obtener Libros por Tema

**URL:** `/api/v1/libros`  
**Method:** `GET`  
**Description:** Returns up to 40 of the most relevant books based on the specified theme. Defaults to "fiction."

**Query Parameters:**
- `tema` *(optional)*: The theme of the books. Defaults to 'ficcion' (fiction).

**Example Request:**
```bash
GET /api/v1/libros?tema=ciencia
```

---

### 2. Obtener Libros de Ciencia Ficción por Cantidad

**URL:** `/api/v1/libros/:cantidad`  
**Method:** `GET`  
**Description:** Returns the specified number of relevant books from the science fiction genre. Defaults to 10.

**Path Parameters:**
- `cantidad`: The number of books to return.

**Example Request:**
```bash
GET /api/v1/libros/15
```

--- 

Each endpoint follows the structure `/api/v1/`, ensuring a consistent naming convention for all requests in version 1 of the API.

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

