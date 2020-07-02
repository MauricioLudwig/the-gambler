import axios from 'axios';

// redirect to login whenever server returns a 401 (unauthorized) status code
axios.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    window.location.replace('/login');
  }
});