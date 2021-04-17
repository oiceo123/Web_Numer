const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/oiceo123/Web_Numer'
})

const getRoot = () => api.get('/root_of_eqution')
const getMatrix = () => api.get('/matrix')

const apis = {
    getRoot,
    getMatrix
}

export default apis