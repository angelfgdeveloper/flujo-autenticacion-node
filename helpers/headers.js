const { request } = require('express');

const getCredentials = ( req = request ) => {
  const { authorization } = req.headers;

  if ( !authorization ) {
    // throw new Error('No authorization header provided');
    throw new Error('No se proporcionó ningún header de autorización');
  }

  // Basic Z2xyb2Rhc3o6cGxhdHpp
  const [ type, credentials ] = authorization.split(' ');

  if ( type !== 'Basic' ) {
    // throw new Error('Authorization type must be Basic');
    throw new Error('El tipo de autorización debe ser Basic');
  }

  // username:password in base 64
  const [ username, password ] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');

  return { username, password };
}

const getToken = ( req = request ) => {
  const { authorization } = req.headers;

  if ( !authorization ) {
    // throw new Error('No authorization header provided');
    throw new Error('No se proporcionó ningún header de autorización');
  }

  // Bearer eyJhbGciOiJIUzI1(...)
  const [ type, token ] = authorization.split(' ');

  if ( type !== 'Bearer' ) {
    // throw new Error('Authorization type must be Bearer');
    throw new Error('El tipo de autorización debe ser Bearer');
  }

  return token;
}

module.exports = {
  getCredentials,
  getToken,
}
