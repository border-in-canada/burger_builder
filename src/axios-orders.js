import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4c147.firebaseio.com/'
});

export default instance;