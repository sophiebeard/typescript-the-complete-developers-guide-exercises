import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'Sophie',
  age: 24
});

axios.get('http://localhost:3000/users/1', {
});