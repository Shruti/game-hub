import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '86f2dcb052894da3a73294e77e5a1b10'
    }
})