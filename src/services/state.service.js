import http from "../http-common";

class StateService {
  getAll() {
    return http.get("/state/list");
  }

  get(code) {
    return http.get(`/state/${code}`);
  }
}

export default new StateService();