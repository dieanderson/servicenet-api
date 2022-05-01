const bcrypt = require('bcrypt')

const crypto = async (pwd) => {
    
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

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