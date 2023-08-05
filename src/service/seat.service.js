import axios from "axios";

const API_URL = "http://localhost:8080";

class SeatService{
    
    getSelectedSeatsByVehicleId(id){
        return axios.get(API_URL + "/selected/" + id);
    }


}
export default new SeatService;