import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Gabrielbzl001/podcastr-api'
})