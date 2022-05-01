const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    //O ID(Matrícula) é criado automaticamente pelo mongo
    name: String,
    birthDate: Date,
    email: String,
    password: String,
})

const Model = mongoose.model('users', schema)

module.exports = Model