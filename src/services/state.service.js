import http from "../http-common";
import authHeader from './auth-header';

class StateService {
  getAll() {
    return http.get("/state/list", { headers: authHeader() });
  }

  get(code) {
    return http.get(`/state/${code}`,{ headers: authHeader() });
  }
}

export default new StateService();