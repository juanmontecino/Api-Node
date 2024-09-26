# Endpoints
Todos los endpoints deben usar el prefijo /api/v1/

## Noticias

### URL:/noticias
Devuelve hasta 50 noticias sobre Argentina
Este endpoint  filtradas por un rango de fechas.

Query Parameters:
desde (opcional): Fecha de inicio en formato YYYY-MM-DD.
hasta (opcional): Fecha de fin en formato YYYY-MM-DD.

Devuelve hasta 50 noticias sobre Argentina filtradas por un rango de fechas.
Ejemplo de Request:
/noticias?desde=2024-01-01&hasta=2024-09-01

 Obtener Noticias por Cantidad
ACLARACION: la consigna pide que se muestre un registro especifico por paramero, pero como las noticias no tienen id, por parametro se pasan la cantidad de noticias que se quieren ver

Este endpoint devuelve una cantidad específica de noticias sobre Argentina.


Parámetros de Ruta:
cantidad: El número de noticias que se desean obtener.

### URL:/noticias/:cantidad

Ejemplo de Request:

/noticias/10

## Canciones
### URL:/canciones
este endpoint devuelve 50 canciones mas conocidas del genero rock por defecto

### Query Parameters:
genero: selecciona el genero deseado para ver las canciones mas conocidas de ese genero especifico.
ejemplo de request: 
/canciones?genero=pop

### Canciones por cantidad
este endpoint devuelve la cantidad de canciones que prefieras del genero prestablecido "RKT"
ejemplo:
/canciones/10
