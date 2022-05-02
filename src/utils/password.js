const bcrypt = require('bcrypt')

const crypto = async (pwd) => {
    
    const salt = bcrypt.genSaltSync()

    const password = bcrypt.hashSync(pwd, salt)

    return password
}

const compare = (pwd, hash) => {

    const result = bcrypt.compareSync(pwd, hash)
    
    return result
}

module.exports = {
    crypto,
    compare,
}