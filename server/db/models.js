const mongoose = require('mongoose')

const todoModelName = 'todo'

const todoSchema = new mongoose.Schema(
    {
        content: String,
        flag: {
            type: String,
            enums: ['high', 'medium', 'low'],
            default: 'medium',
        },
        status: {
            type: 'String',
            enums: ['done', 'noteDone'],
            default: 'noteDone',
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
