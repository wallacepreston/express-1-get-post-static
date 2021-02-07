const axios = require('axios');

const fetchUsers = async () => {
  const {data: users} = await axios.get('http://jsonplace-univclone.herokuapp.com/users');
  console.log('users: ', users);
}

fetchUsers();