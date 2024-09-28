# Documentación de Endpoints de la API

## URL render
```bash
api-node-drh0.onrender.com
```
Todos los endpoints deben usar el prefijo `/api/v1/`.

## Noticias

### 1. Obtener Noticias Filtradas por Fecha
### ACLARACION: La Api News devuelve un 403 (Forbidden) cuando se intenta acceder a ella mediante render, abajo de todo el error devuelve la url a la que intenta hacer peticion
**URL:** `/api/v1/noticias`  
**Método:** `GET`  
**Descripción:** Devuelve hasta 50 noticias sobre Argentina, filtradas por un rango de fechas.

**Parámetros de Consulta:**
- `desde` *(opcional)*: Fecha de inicio en el formato `YYYY-MM-DD`.
- `hasta` *(opcional)*: Fecha de fin en el formato `YYYY-MM-DD`.

**Ejemplo de Solicitud:**
```bash
api-node-drh0.onrender.com/api/v1/noticias?desde=2024-01-01&hasta=2024-09-01
```

---

### 2. Obtener Noticias por Cantidad

**URL:** `/api/v1/noticias/:cantidad`  
**Método:** `GET`  
**Descripción:** Devuelve una cantidad específica de noticias sobre Argentina.

**Parámetros de Ruta:**
- `cantidad`: El número de noticias que se desean obtener.

**Ejemplo de Solicitud:**
```bash
api-node-drh0.onrender.com/api/v1/noticias/10
```

---

## Canciones

### 1. Obtener Canciones por Género

**URL:** `/api/v1/canciones`  
**Método:** `GET`  
**Descripción:** Devuelve 50 de las canciones más populares, por defecto del género rock.

**Parámetros de Consulta:**
- `genero` *(opcional)*: Especifica el género de las canciones. Por defecto es rock.

**Ejemplo de Solicitud:**
```bash
api-node-drh0.onrender.com/api/v1/canciones?genero=pop
```

---

### 2. Obtener Canciones por Cantidad

**URL:** `/api/v1/canciones/:cantidad`  
**Método:** `GET`  
**Descripción:** Devuelve una cantidad específica de canciones del género preestablecido "RKT".

**Parámetros de Ruta:**
- `cantidad`: La cantidad de canciones que se desean obtener.

**Ejemplo de Solicitud:**
```bash
api-node-drh0.onrender.com/api/v1/canciones/10
```

---

## Libros

### 1. Obtener Libros por Tema

**URL:** `/api/v1/libros`  
**Método:** `GET`  
**Descripción:** Devuelve hasta 40 libros más relevantes basados en el tema especificado. Por defecto, el tema es "ficción".

**Parámetros de Consulta:**
- `tema` *(opcional)*: El tema de los libros. Por defecto es 'ficcion' (ficción).

**Ejemplo de Solicitud:**
```bash
api-node-drh0.onrender.com/api/v1/libros?tema=ciencia
```

---

### 2. Obtener Libros de Ciencia Ficción por Cantidad

**URL:** `/api/v1/libros/:cantidad`  
**Método:** `GET`  
**Descripción:** Devuelve el número especificado de libros relevantes del género de ciencia ficción. Por defecto es 10.

**Parámetros de Ruta:**
- `cantidad`: La cantidad de libros que se desean obtener.

**Ejemplo de Solicitud:**
```bash
api-node-drh0.onrender.com/api/v1/libros/15
```

---

Cada endpoint sigue la estructura `/api/v1/`, asegurando una convención de nombres consistente para todas las solicitudes en la versión 1 de la API.
## Pokémon API

## Endpoints

Todos los endpoints deben usar el prefijo `/api/v1/`.

#### URL: `/pokemons`
Este endpoint devuelve información sobre un Pokémon específico.

#### Query Parameters:
- **name** (obligatorio): El nombre del Pokémon que se desea buscar.

#### Ejemplo de Request:

GET api-node-drh0.onrender.com/api/v1/pokemons?name=charmander

#### Obtener lista de Pokémon
URL: /pokemons
Este endpoint devuelve una lista paginada de Pokémon.

#### Parámetros de Ruta:
cantidad (obligatorio): El número de Pokémon que se desean obtener.
#### Ejemplo de Request:

GET api-node-drh0.onrender.com/api/v1/pokemons/10

