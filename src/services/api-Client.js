import axios from "axios";


export default axios.create({
    // baseURL:"https://quizdose-backend-6e67a5546778.herokuapp.com/api/"
    baseURL:"http://localhost:5000/api/"
})