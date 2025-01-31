const express = require('express')
require('dotenv').config()
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000

    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.use('/api/v1/empleados', require('../routes/empleados')) // ejemplo
    this.app.use('/api/v1/noticias', require('../routes/noticias')) // Montecino
    this.app.use('/api/v1/canciones', require('../routes/canciones')) // Rust
    this.app.use('/api/v1/libros', require('../routes/libros')) // Santicchia
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en el puerto ${this.port}: http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
