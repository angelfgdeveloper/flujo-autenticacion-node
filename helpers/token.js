
const tokenExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDM3MGI3MDcyNTllMWRhYmMzNThmNDkiLCJuYW1lIjoiVGVzdCIsImlhdCI6MTY4MTc3OTY1MiwiZXhwIjoxNjgxNzg2ODUyfQ.dniJcMkx_hmYsAB7vSMrGFqcnACO5TQb3Er_rwN1_Yo';

const signToken = ( user = {} ) => {
  const payload = {
    // TODO: add sub, name, and exp claims
  };

  // TODO: Return signed token
  return tokenExample; // validar
}

const verifyToken = ( token ) => {
  return tokenExample; // validar
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