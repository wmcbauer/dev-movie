import axios from "axios";

const api = axios.create({
    baseURL :'https://api.themoviedb.org/3/',
    params:{
        api_key:'e6706f3f106f7a60fc909b80357da684',
        language:'pt-BR',
        page:1
    }
})
export default api