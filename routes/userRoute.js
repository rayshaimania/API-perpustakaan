const express = require('express') // untuk memuat router
const userControl = require('../controllers/userController')

const router = express.Router()

router.get('/',userControl.getAllBooks)
router.get('/:code',userControl.getBookByCode)

router.get('/',userControl.getAllUser)
router.get('/:id',userControl.getUserById)

router.post('/', userControl.addBook)
router.delete('/:code', userControl.delBook)

router.put('/:code', userControl.updateBook)

module.exports = router
