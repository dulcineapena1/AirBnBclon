import axios from "axios";
//axios.defaults.baseURL= "http://localhost:3001"

export default {
  getAlojamientos: function() {
    return axios.get("/api/alojamientos");
  },
  getEstancias: function() {
    return axios.get("/api/estancias");
  },
  getExperiencias: function() {
    return axios.get("/api/experiencias");
  }
};
