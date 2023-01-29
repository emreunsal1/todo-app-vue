const { TodoModel } = require('../db')

const get = async (req, res) => {
    try {
        const { sortBy } = req.query
        const response = await TodoModel.find({ isDeleted: false }).sort({
            updatedAt: sortBy || 'asc',
        })
        res.send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}
const create = async (req, res) => {
    try {
        const { content, priority, completeStatus } = req.body
        const newTodo = await TodoModel.create({
            content,
            priority,
            completeStatus,
        })
        res.send(newTodo)
    } catch (error) {
        res.status(400).send(error)
    }
}
const update = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = req.body
        const updatedTodo = await TodoModel.findOneAndUpdate({ _id: id }, data, {
            new: true,
        })
        res.send(updatedTodo)
    } catch (error) {
        res.status(400).send(error)
    }
}
const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params
        await TodoModel.findOneAndUpdate({ _id: id }, { isDeleted: true })
        res.send({
            success: true,
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { get, create, update, deleteTodos }
