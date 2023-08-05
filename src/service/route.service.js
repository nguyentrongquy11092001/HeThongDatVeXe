import axios from "axios";

const API_URL = "http://localhost:8080";

class RouteService{
    saveRoute(route){
        return axios.post(API_URL + "/saveRoute", route);
    }

    getAllRoutes(){
        return axios.get(API_URL + "/getAllRoutes");
    }

    getRouteById(id){
        return axios.get(API_URL + "/getRouteById/" + id);
    }

    deleteRoute(id){
        return axios.get(API_URL + "/deleteRoute/" + id);
    }

    editRoute(route){
        return axios.post(API_URL + "/editRoute/" + route.id, route);
    }
}
export default new RouteService;