import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID f2a1c5964c87a0055bb82449d3a60a24cb7f569ebed018e376f7794a240dfd4a"
    }
})