import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '271acf0c76ab49da85fe0f79b8c3ed4f'
    }
})