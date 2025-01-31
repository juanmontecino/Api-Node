const { Router } = require('express')
const { getLibros, getLibroPorId } = require('../controllers/libros')

const router = Router()

router.get('/', getLibros)
router.get('/:id', getLibroPorId)

module.exports = router
