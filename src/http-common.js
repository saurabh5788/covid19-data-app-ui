import axios from "axios";

export default axios.create({
  baseURL: "https://covid19-data-app-be.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});