const { create, update, deleteTodos, get } = require('../controllers/todo')
const express = require('express')
const todoRouter = express.Router()

todoRouter.post('/', create)
todoRouter.get('/', get)
todoRouter.put('/', update)
todoRouter.delete('/', deleteTodos)

module.exports = { todoRouter }
