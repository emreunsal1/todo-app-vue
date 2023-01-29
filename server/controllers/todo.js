const { TodoModel } = require('../db')

const get = async (req, res) => {
    try {
        const { filter } = req.query
        const response = await TodoModel.find({ isDeleted: false }).sort({
            updatedAt: filter || 'asc',
            test: 1,
        })
        res.send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}
const create = async (req, res) => {
    try {
        const { content, flag, status } = req.body
        const newTodo = await TodoModel.create({ content, flag, status })
        const response = await newTodo.save()
        res.send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}
const update = async (req, res) => {
    try {
        const { id, query } = req.body
        const updatedTodo = await TodoModel.findOneAndUpdate({ _id: id }, query, {
            new: true,
        })
        res.send(updatedTodo)
    } catch (error) {
        res.status(400).send(error)
    }
}
const deleteTodos = async (req, res) => {
    try {
        const { id } = req.body
        await TodoModel.findOneAndUpdate({ _id: id }, { isDeleted: true })
        res.send('success')
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { get, create, update, deleteTodos }
