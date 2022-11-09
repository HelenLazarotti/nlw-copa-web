import axios from 'axios'

export const api = axios.create({
    //passo a URL que NUNCA MUDA, em todas as chamadas https
    baseURL: 'http://localhost:3333'
})
