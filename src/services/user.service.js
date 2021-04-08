import http from "../http-common";

class UserService {
  getToken(username, password) {
    return http.post("/user/jwt", {
      username,
      password
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, username, password) {
    return http.post("/user/add", {
      name,
      username,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

}

export default new UserService();