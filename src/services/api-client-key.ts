import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df67f978cbe8413d9b2da04fe217e394'
    }
})