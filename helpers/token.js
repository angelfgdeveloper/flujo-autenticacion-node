const jwt = require('jsonwebtoken');

const ONE_TIME_IN_MILLISECONDS = 60 * 1000;
const SECRET = process.env.SECRET;

const signToken = ( user = {} ) => {
  const payload = {
    sub: user.id,
    name: user.fullname,
    exp: Date.now() + ONE_TIME_IN_MILLISECONDS,
  };

  return jwt.sign(payload, SECRET);
}

const verifyToken = ( token ) => {
  return jwt.verify(token, SECRET); // validar
}

const validateExpiration = ( payload ) => {
  if ( Date.now() > payload.exp ) {
    // throw new Error('Token expired');
    throw new Error('Token expirado');
  }
}

module.exports = {
  signToken,
  validateExpiration,
  verifyToken,
}