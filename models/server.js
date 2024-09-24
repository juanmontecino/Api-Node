const express = require('express')
require('dotenv').config();

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas() // Uncomment this line
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.use('/api/v1/empleados', require('../routes/empleados')) // ejemplo
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
