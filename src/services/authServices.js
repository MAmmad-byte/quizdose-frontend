import apiClient from "./api-Client";


class AuthServices{
    login(data){
        apiClient.post("/auth",{email:data.email, password:data.password})
    }
}

export default new AuthServices;