const express = require('express')
require('dotenv').config()

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
    // Esto permite parsear las peticiones con JSON
    this.app.use(express.json())
  }

  rutas () {
    this.app.use('/api/v1/noticias', require('../routes/noticias')) // Montecino
    this.app.use('/api/v1/canciones', require('../routes/canciones')) // Rust
    this.app.use('/api/v1/libros', require('../routes/libros')) // Santicchia
    this.app.use('/api/v1/pokemons', require('../routes/pokemon')) // Mangas
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en el puerto http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
