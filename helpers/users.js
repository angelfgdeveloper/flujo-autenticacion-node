const users = [
  {
    id: process.env.USER_NAME,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    fullname: process.env.FULLNAME,
  },
];

const getUser = ( username, password ) => {
  const user = users.find((user) => user.username === username);

  if ( !user || user.password !== password ) {
    // throw new Error('Invalid credentials');
    throw new Error('Credenciales no válidas');
  }

  return user;
}

module.exports = {
  getUser,
}