import apiClient from "./api-Client";
import { getAuthToken } from "./authServices";

class UserServices {
  login(data) {
    return apiClient.post("/auth", {
      email: data.email,
      password: data.password,
    });
  }

  signup(data) {
    return apiClient.post("/users", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  }
  fetchAllUsers(){
    return apiClient.get("/users",{
      headers:{
        auth:getAuthToken()
      }
    })
  }
}

export default new UserServices();
