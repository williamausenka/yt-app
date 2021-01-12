import axios from 'axios';


const KEY = 'AIzaSyBFsiZKRbMOKfqoP5UxWghFLCQIzbG22js'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})