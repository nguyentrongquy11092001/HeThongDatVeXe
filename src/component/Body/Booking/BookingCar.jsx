import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingCar.css'



const BookingCar = () => {
  const API_URL = "http://localhost:8080";

  const [vehicles, setVehicles] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleVehicleSelection = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get(API_URL + '/');
      setVehicles(response.data);
    };

    fetchVehicles();
  }, []);

  
  return (
    
    <div className='ListVehicleBooking'>
      <h5><b>DANH SÁCH XE</b></h5>
      <div className="common-routes-container ">
          <p class="title text-danger my-1"><b>CHỌN XE</b></p>
          <div className="items">
              <div className="row text-center">
              {vehicles.map((vehicle) => (
                <div className="col-items">
                  <a key={vehicle.vehicle_id} className="link-schedule" onClick={() => handleVehicleSelection(vehicle)}>
                    <img className="photo-schedule" src="https://gocheapv.b-cdn.net/storage/app/uploads/public/618/d41/594/618d41594c758279409162.jpg" alt='image-chuyen-xe'></img>
                    <div className="text-schedule">
                      <p class="title-schedule fs-5" data-v-15bcc412=""> {vehicle.brand} {vehicle.model} - {vehicle.seat_number} chỗ</p>
                      <div className="details-schedule">
                        <div className="distance"><i class="bi bi-geo-alt-fill mx-1"></i>310km</div>
                        <div className="time"><i class="bi bi-stopwatch-fill mx-1"></i>8h</div>
                        <div className="price"><i class="bi bi-cash mx-1"></i>300.000đ</div>
                    </div>
                    </div>
                  </a>
                </div>
                ))}
              </div>
            </div>
          </div>
      {/* <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.vehicle_id} onClick={() => handleVehicleSelection(vehicle.vehicle_id)}>
            {vehicle.brand} {vehicle.model}
          </li>
        ))}
      </ul> */}
      {selectedVehicle && (
        <div className="seat-selector">
          <h2>Chọn ghế:</h2>
          <div className="seat-list">
            <div className="grid-container">
              {Array(selectedVehicle.seat_number)
                .fill()
                .map((_, index) => (
                  <button className='btn-seat' key={index}>{index + 1}</button>
                ))}
            </div>
          </div>
          <button className='btn btn-success'>Đặt ghế</button>
        </div>
      )}
    </div>
  );
};

export default BookingCar;
