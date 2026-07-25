import axios from "axios";

const api = axios.create({

    baseURL: "https://bionshop-production.up.railway.app/api"

});

export default api;