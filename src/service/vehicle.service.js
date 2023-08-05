import axios from "axios";

const API_URL = "http://localhost:8080";

class VehicleService{
    saveVehicles(vehicle){
        return axios.post(API_URL + "/saveVehicle", vehicle);
    }

    getAllVehicles(){
        return axios.get(API_URL + "/");
    }

    getVehicleById(id){
        return axios.get(API_URL + "/findVehicleById/" + id);
    }

    deleteVehicle(id){
        return axios.get(API_URL + "/deleteVehicle/" + id);
    }

    editVehicles(vehicle){
        return axios.post(API_URL + "/editVehicle/" + vehicle.id, vehicle);
    }

}
export default new VehicleService;