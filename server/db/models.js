const mongoose = require('mongoose')

const todoModelName = 'todo'

const todoSchema = new mongoose.Schema(
    {
        content: String,
        priority: {
            type: String,
            enums: ['low', 'mid', 'high'],
            default: 'mid',
        },
        completeStatus: {
            type: 'String',
            enums: ['done', 'notDone'],
            default: 'notDone',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
)

module.exports = {
    todoModelName,
    todoSchema,
}
