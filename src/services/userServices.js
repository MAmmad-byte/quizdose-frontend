import apiClient from "./api-Client";

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
}

export default new UserServices();
