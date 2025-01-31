const axios = require('axios')
const { request, response } = require('express')

const getLibros = (req = request, res = response) => {
  const { tema = 'ficcion', page = 1, lang = 'en' } = req.query
  const maxResults = 50
  const startIndex = (page - 1) * maxResults

  const apiKey = process.env.APIKEYLIBROS
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${tema}&langRestrict=${lang}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`

  if (!apiKey) {
    return res.status(500).json({
      msg: 'Error: API key no configurada'
    })
  }

  axios.get(apiUrl)
    .then((response) => {
      const { items } = response.data || {}
      if (!items || items.length === 0) {
        return res.status(404).json({
          msg: 'No se encontraron libros con los filtros proporcionados'
        })
      }
      res.status(200).json({
        msg: `Libros más relevantes en el tema "${tema}"`,
        libros: items.map(item => ({
          id: item.id,
          titulo: item.volumeInfo.title,
          autores: item.volumeInfo.authors,
          descripcion: item.volumeInfo.description,
          imagenPortada: item.volumeInfo.imageLinks?.thumbnail
        }))
      })
    })
    .catch((error) => {
      console.error(error)
      res.status(400).json({
        msg: 'Error al obtener los libros',
        error
      })
    })
}

// Obtener un libro por Id
const getLibroPorId = (req = request, res = response) => {
  const { id } = req.params
  const apiKey = process.env.APIKEYLIBROS

  if (!apiKey) {
    return res.status(500).json({
      msg: 'Error: API key no configurada'
    })
  }

  const apiUrl = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`

  axios.get(apiUrl)
    .then((response) => {
      const book = response.data

      if (!book) {
        return res.status(404).json({
          msg: 'No se encontró un libro con ese ID'
        })
      }

      res.status(200).json({
        id: book.id,
        titulo: book.volumeInfo.title,
        autores: book.volumeInfo.authors,
        descripcion: book.volumeInfo.description,
        imagenPortada: book.volumeInfo.imageLinks?.thumbnail
      })
    })
    .catch((error) => {
      console.error(error)
      res.status(400).json({
        msg: 'Error al obtener el libro',
        error
      })
    })
}

module.exports = {
  getLibros,
  getLibroPorId
}
