import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RouteDetail.css";
import routeService from "../../../service/route.service";
import moment from 'moment';
import axios from 'axios';
import seatService from "../../../service/seat.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { Link } from "react-router-dom";
import vehicleService from "../../../service/vehicle.service";

const RouteDetail = () => {
  const [route, setRoute] = useState({
    user_id: "",
    vehicle_id: "",
    pickup_location: "",
    city_from: "",
    city_to: "",
    pickup_datetime: "",
    dropoff_location: "",
    travel_time: "",
    total_amount: "",
    created_at: "",
    total_distance: "",
  });

  const { id } = useParams();
  useEffect(() => {
    routeService
      .getRouteById(id)
      .then((res) => {
        setRoute(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const formattedDatetime = moment.utc(route.pickup_datetime).format('DD/MM/YYYY HH:mm');
  
  //Hiển thị ghế
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const showSeat = (id) => {
    vehicleService.getVehicleById(id).then((res)=>{
      setSelectedVehicle(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  };
  
  const API_URL = "http://localhost:8080";
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seatId) => {
    setSelectedSeat(seatId);
  };

  //Thông báo thêm thành công
  const notifyAdd = () =>
    toast.success("Đặt ghế thành công!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const bookSeat = () => {
    if (selectedSeat) {
      axios
        .post(API_URL + `/api/seats/${selectedVehicle.vehicle_id}/book/${selectedSeat}`)
        .then((response) => {
          console.log(response.data);
          // Xử lý sau khi đặt ghế thành công
          notifyAdd();
        })
        .catch((error) => {
          console.log(error);
          // Xử lý khi có lỗi xảy ra
        });
    } else {
      // Xử lý khi người dùng chưa chọn ghế
    }
  };
  
  const [isSelectedSeats, setIsSelectedSeats] = useState([]);

const showSeatSelect = (vehicleId) => {
  axios.get(`/selected/${vehicleId}`)
    .then(response => {
      setIsSelectedSeats(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

  
  return (
    <>
    <ToastContainer autoClose={1500} />
      <div>
        <Link to="/" class="nav-link text-dark">
            <i class="bi bi-arrow-left-square-fill"></i> TRỞ VỀ
        </Link>
      </div>
      <h3 class="title text-danger text-center fs-5"><b>THÔNG TIN CHI TIẾT TUYẾN XE</b></h3>
      <div className="container routeDetail">
        <div className="row">
          <div className="col-sm-4">
            <img className="photo-route" src="https://xevati.com/wp-content/uploads/2023/07/Nha-Hoang-Huy-Xe-Ninh-Thuan-di-Tay-Ninh.jpg" alt='image-chuyen-xe'></img>
          </div>
          <div className="col-sm-8">
            <h4 className="">
              Tuyến xe đi từ <b className="text-danger">{route.city_from}</b>{" "}
              đến <b className="text-danger">{route.city_to}</b>
            </h4>
            <ul>
              {/* <li>
                <b>Phương tiện:</b> {route.vehicle_id}
              </li> */}
              <li>
                <b>Tỉnh/ Thành Phố đi:</b> {route.city_from}
              </li>
              <li>
                <b>Địa điểm bến xe đi:</b> {route.pickup_location}
              </li>
              <li>
                <b>Tỉnh/ Thành Phố đến:</b> {route.city_to}
              </li>
              <li>
                <b>Địa điểm bến xe đến:</b> {route.dropoff_location}
              </li>
              <li>
                
                <b>Thời gian khởi hành:</b> {formattedDatetime}
              </li>
              <li>
                <b>Tổng giờ đi:</b> {route.travel_time} giờ
              </li>
              <li>
                <b>Tổng quãng đường:</b> {route.total_distance} Km
              </li>
              <li>
                <b>Giá vé:</b> {route.total_amount} VNĐ
              </li>
            </ul>
          </div>
        </div>
        <button onClick={() => {showSeat(route.vehicle_id); showSeatSelect(route.vehicle_id)}} className="btn btn-success">ĐẶT CHỖ</button>
        {/* <Link to="/" class="nav-link text-dark">
            <button className="btn btn-danger">
                TRỞ VỀ
            </button>
        </Link> */}
        {selectedVehicle && (
        <div className="seat-selector">
          <h5 className="mt-3">Chọn ghế:</h5>
         
          <div className="seat-list">
            <div className="grid-container-route">
            {Array(selectedVehicle.seat_number)
            .fill()
            .map((_, index) => (
              <button
                className={`btn-seat-route ${
                  index + 1 === selectedSeat ? "btn-selected" : ""
                }`}
                key={index}
                onClick={() => handleSeatSelection(index + 1)}
                style={{
                  backgroundColor: isSelectedSeats.find(seat => seat.seat_id === index + 1)?.isSelected
                    ? "red"
                    : "white"
                }}
                disabled={isSelectedSeats.find(seat => seat.seat_id === index + 1)?.isSelected}
              >
                {index + 1}
              </button>
            ))}
            </div>
          </div>
          <button className='btn btn-danger btn-continue' onClick={bookSeat}>TIẾP TỤC <i class="bi bi-arrow-right"></i></button>
        </div>
      )}
      
      </div>
    </>
  );
};

export default RouteDetail;
