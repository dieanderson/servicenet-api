const UsersModel = require('../models/users')
const { crypto } = require('../utils/password')

async function get(req, res) {
    const { name } = req.params
    const obj = name ? { name: { $regex: name, $options : 'i' } } : null
    
    const users = await UsersModel.find( obj )
    res.send(users)
}

async function post(req,res) {
    const {
        name,
        birthDate,
        email,
        password,  
    } = req.body

    passwordCrypto = await crypto(password)

    const user = new UsersModel({
        name,
        birthDate,
        email,
        password: passwordCrypto,    
    })

    user.save()
    res.send({ message: 'success' })
}

async function put(req,res) {
    const { id } = req.params

    const user = await UsersModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({ 
        message: 'success', 
        user,
    })
}

async function remove(req,res) {
    const { id } = req.params

    const remove = await UsersModel.deleteOne({ _id: id })

    const msg = remove.deletedCount ? 'success' : 'error'

    res.send({ message: msg })
}

module.exports = {
    get,
    post,
    put,
    remove,
}