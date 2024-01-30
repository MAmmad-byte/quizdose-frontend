import axios from "axios";


export default axios.create({
    baseURL:"https://quizdose-backend.vercel.app/api/"
})