const jwt = require('jsonwebtoken');

const tokenSign = async (user) =>{
    return jwt.sign({
        id:user.id,
        name:user.name
    },
    "123456",
    {
        expiresIn:"2h",
    }
    );
}

module.exports = { tokenSign }