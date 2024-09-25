const axios = require('axios');
const { request, response } = require('express');

const getLibros = (req = request, res = response) => {
  const { tema = 'ficcion' } = req.query; 

  const apiKey = process.env.APIKEYLIBROS;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${tema}&key=${apiKey}&maxResults=40`;

  if (!apiKey) {
    return res.status(500).json({
      msg: 'Error: API key no configurada',
    });
  }

  try {
    axios.get(apiUrl)
      .then((response) => {
        const { items } = response.data;
        res.status(200).json({
          msg: `Libros más relevantes en el tema ${tema}`,
          libros: items.map(item => ({
            id: item.id,
            titulo: item.volumeInfo.title,
            autores: item.volumeInfo.authors,
            descripcion: item.volumeInfo.description,
            imagenPortada: item.volumeInfo.imageLinks?.thumbnail
          })),
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          msg: 'Error al obtener los libros',
          error,
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

const getLibro = (req = request, res = response) => {
  const { cantidad = '10' } = req.params; 
  const apiKey = process.env.APIKEYLIBROS;

  if (!apiKey) {
    return res.status(500).json({
      msg: 'Error: API key no configurada',
    });
  }

  try {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:science+fiction&key=${apiKey}&maxResults=${cantidad}`;

    axios.get(apiUrl)
      .then((response) => {
        const { items } = response.data;

        const librosLimitados = items.map(item => ({
          id: item.id,
          titulo: item.volumeInfo.title,
          autores: item.volumeInfo.authors,
          descripcion: item.volumeInfo.description,
          imagenPortada: item.volumeInfo.imageLinks?.thumbnail
        }));

        res.status(200).json({
          msg: `Los ${cantidad} libros más relevantes en el género de ciencia ficción`,
          libros: librosLimitados,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          msg: 'Error al obtener los libros',
          error,
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
}

module.exports = {
  getLibros,
  getLibro
}