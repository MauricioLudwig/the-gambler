import axios from 'axios';

axios.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    window.location.replace('/login');
  }
});