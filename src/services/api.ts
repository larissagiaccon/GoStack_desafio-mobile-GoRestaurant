import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.50.197:3333',
  baseURL: 'http://localhost:3333',
});

export default api;

// yarn json-server --host 192.168.50.197 server.json -p 3333
