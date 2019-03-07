import axios from 'axios';

const KEY = 'AIzaSyDX7ZCJYsiUAILR-Jo5iX-1oTLd_vIZGDw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: 'surfboards'
    }
});