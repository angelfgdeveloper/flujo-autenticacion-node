const fs = require('node:fs');
const jwt = require('jsonwebtoken');

// Verificacion asimetrica
const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;
const PUBLIC_KEY_PATH = process.env.PUBLIC_KEY_PATH;

const SECRET = process.env.SECRET;
const ONE_TIME_IN_MILLISECONDS = 60 * 1000;

const signToken = ( user = {} ) => {
  const payload = {
    sub: user.id,
    name: user.fullname,
    exp: Date.now() + ONE_TIME_IN_MILLISECONDS,
  };

  // Verificacion asimetrica
  if (PRIVATE_KEY_PATH) {
    const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, 'utf-8');
    return jwt.sign(payload, privateKey, {
      algorithm: 'RS256'
    });
  }

  // Verificacion simetrica
  return jwt.sign(payload, SECRET);
}

const verifyToken = ( token ) => {
  // Verificacion asimetrica
  if (PUBLIC_KEY_PATH) {
    const publicKey = fs.readFileSync(PUBLIC_KEY_PATH, 'utf-8');
    return jwt.verify(token, publicKey);
  }

  // Verificacion simetrica
  return jwt.verify(token, SECRET);
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