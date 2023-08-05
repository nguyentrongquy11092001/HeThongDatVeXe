import React, {useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddRoute.css"
import routeService from '../../../service/route.service';
import vehicleService from "../../../service/vehicle.service";

import moment from 'moment';
import { Link } from "react-router-dom";


const AddRoute = () => {
  const init2 = () => {
    vehicleService
      .getAllVehicles()
      .then((res) => {
        console.log(res.data);
        setVehicleList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Danh sách xe
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    init2();
  }, []);
  
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

      const handleChange = (e) => {
        const value = e.target.value;
        setRoute({ ...route, [e.target.name]: value });
      };
      //Đặt lại nhập liệu
      const resetForm = () => {
        setRoute({
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
      };
      

      //Thêm phương tiện
  const RouteAdd = (e) => {
    e.preventDefault();

    routeService
      .saveRoute(route)
      .then((res) => {
        console.log("Add Successfully");
        setRoute({
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
        init();
        notifyAdd();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Thông báo thêm lịch trình thành công
  const notifyAdd = () =>
    toast.success("Lưu thành công!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    //Thông báo xóa lịch trình thành công
  const notifyDelete = () =>
  toast.success("Đã xóa!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

    //Danh sách lịch trình
    const [routeList, setRouteList] = useState([]);

    const init = () => {
      routeService
        .getAllRoutes()
        .then((res) => {
          console.log(res.data);
          setRouteList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    useEffect(() => {
      init();
    }, []);

    //Xóa lịch trình
  const deleteRoute = (id) => {
    routeService
      .deleteRoute(id)
      .then((res) => {
        console.log("Delete Successfully");
        init();
        notifyDelete();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Cập nhật lịch trình
  const [vehicle, setVehicle] = useState();
  const editRoute = (id) => {
    routeService.getRouteById(id).then((res)=>{
      setRoute(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  };

  
  const handleVehicleChange = (event) => {
    const vehicleId = event.target.value;
    const selectedVehicle = vehicleList.find(vehicle => vehicle.vehicle_id === Number(vehicleId));
    setRoute({ ...route, vehicle_id: vehicleId }); 
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      <div class="container-lg addBooking mt-3">
      {/* <Link to={'listRoute/'}> 
        <button className='btn btn-primary'>DANH SÁCH TUYẾN XE</button>
      </Link> */}
        <div class="row col-12 justify-content-center">
          <div class="col-8 " id="booking_add">
            <div class="card">
              <div class="card-header  text-center fs-5"><b>THÔNG TIN TUYẾN XE</b></div>
              <div class="card-body">
                <form onSubmit={(e) => RouteAdd(e)}>
                <div className="row mb-3">
                  <div class="col-sm-6">
                    <label for="user_id" class="form-label">
                      Tên người lập tuyến
                    </label>
                    <input
                      type="number"
                      name="user_id"
                      placeholder="Người tạo"
                      class="form-control"
                      required="required"
                      onChange={(e) => handleChange(e)}
                      value={route.user_id}
                    />
                  </div>
                  <div class="col-sm-6">
                    <label for="vehicle_id" class="form-label">
                      Chọn xe chạy tuyến
                    </label>
                    <select name="vehicle_id" className='form-control' onChange={handleVehicleChange}
                      value={route.vehicle_id}>
                      <option value="">Chọn phương tiện</option>
                      {vehicleList.map((vehicle) => (
                        <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
                          {vehicle.brand} {vehicle.model} - {vehicle.seat_number} chỗ
                        </option>
                      ))}
                    </select>
                    {/* <input
                      type="number"
                      name="vehicle_id"
                      placeholder="Phương tiện"
                      class="form-control"
                      required="required"
                      onChange={(e) => handleChange(e)}
                      value={route.vehicle_id}
                    /> */}
                  </div>
                  </div>
                  <div className="row mb-3">
                  <div className="col-sm-3">
                      <label for="city_from" class="form-label">
                      Thành phố đi
                      </label>
                      <input
                        type="text"
                        name="city_from"
                        placeholder="Thành phố đi"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.city_from}
                        list='place-list'
                      />
                      <datalist id="place-list">
                      <option value="An Giang">An Giang</option>
                      <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                      <option value="Bắc Giang">Bắc Giang</option>
                      <option value="Bắc Kạn">Bắc Kạn</option>
                      <option value="Bạc Liêu">Bạc Liêu</option>
                      <option value="Bắc Ninh">Bắc Ninh</option>
                      <option value="Bến Tre">Bến Tre</option>
                      <option value="Bình Định">Bình Định</option>
                      <option value="Bình Dương">Bình Dương</option>
                      <option value="Bình Phước">Bình Phước</option>
                      <option value="Bình Thuận">Bình Thuận</option>
                      <option value="Bình Thuận">Bình Thuận</option>
                      <option value="Cà Mau">Cà Mau</option>
                      <option value="Cao Bằng">Cao Bằng</option>
                      <option value="Đà Lạt">Đà Lạt</option>
                      <option value="Đắk Lắk">Đắk Lắk</option>
                      <option value="Đắk Nông">Đắk Nông</option>
                      <option value="Điện Biên">Điện Biên</option>
                      <option value="Đồng Nai">Đồng Nai</option>
                      <option value="Đồng Tháp">Đồng Tháp</option>
                      <option value="Đồng Tháp">Đồng Tháp</option>
                      <option value="Gia Lai">Gia Lai</option>
                      <option value="Hà Giang">Hà Giang</option>
                      <option value="Hà Nam">Hà Nam</option>
                      <option value="Hà Tĩnh">Hà Tĩnh</option>
                      <option value="Hải Dương">Hải Dương</option>
                      <option value="Hậu Giang">Hậu Giang</option>
                      <option value="Hòa Bình">Hòa Bình</option>
                      <option value="Hưng Yên">Hưng Yên</option>
                      <option value="Khánh Hòa">Khánh Hòa</option>
                      <option value="Kiên Giang">Kiên Giang</option>
                      <option value="Kon Tum">Kon Tum</option>
                      <option value="Lai Châu">Lai Châu</option>
                      <option value="Lâm Đồng">Lâm Đồng</option>
                      <option value="Lạng Sơn">Lạng Sơn</option>
                      <option value="Lào Cai">Lào Cai</option>
                      <option value="Long An">Long An</option>
                      <option value="Nam Định">Nam Định</option>
                      <option value="Nghệ An">Nghệ An</option>
                      <option value="Ninh Bình">Ninh Bình</option>
                      <option value="Ninh Thuận">Ninh Thuận</option>
                      <option value="Phú Thọ">Phú Thọ</option>
                      <option value="Quảng Bình">Quảng Bình</option>
                      <option value="Quảng Bình">Quảng Bình</option>
                      <option value="Quảng Ngãi">Quảng Ngãi</option>
                      <option value="Quảng Ninh">Quảng Ninh</option>
                      <option value="Quảng Trị">Quảng Trị</option>
                      <option value="Sóc Trăng">Sóc Trăng</option>
                      <option value="Sơn La">Sơn La</option>
                      <option value="Tây Ninh">Tây Ninh</option>
                      <option value="Thái Bình">Thái Bình</option>
                      <option value="Thái Nguyên">Thái Nguyên</option>
                      <option value="Thanh Hóa">Thanh Hóa</option>
                      <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                      <option value="Tiền Giang">Tiền Giang</option>
                      <option value="Trà Vinh">Trà Vinh</option>
                      <option value="Tuyên Quang">Tuyên Quang</option>
                      <option value="Vĩnh Long">Vĩnh Long</option>
                      <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                      <option value="Yên Bái">Yên Bái</option>
                      <option value="Phú Yên">Phú Yên</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    </datalist>
                  </div>
                  <div className="col-sm-9">
                      <label for="pickup_location" class="form-label">
                      Địa điểm bến xe đi
                      </label>
                      <input
                        type="text"
                        name="pickup_location"
                        placeholder="Địa điểm bến xe đi"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.pickup_location}
                      />
                  </div>
                  </div>
                  <div className="row mb-3">
                  <div className="col-sm-3">
                      <label for="city_to" class="form-label">
                      Thành phố đến
                      </label>
                      <input
                        type="text"
                        name="city_to"
                        placeholder="Thành phố đến"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.city_to}
                        list='place-list'
                      />
                  </div>
                  <div className="col-sm-9">
                      <label for="dropoff_location" class="form-label">
                      Địa điểm bến xe đến
                      </label>
                      <input
                        type="text"
                        name="dropoff_location"
                        placeholder="Địa điểm bến xe đến"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.dropoff_location}
                      />
                  </div>
                  </div>
                  
                  <div className="row mb-3">
                  <div className="col-sm-4">
                      <label for="pickup_datetime" class="form-label">
                      Thời gian khởi hành
                      </label>
                      <input
                        type="datetime-local"
                        name="pickup_datetime"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.pickup_datetime}
                      />
                  </div>
                  <div className="col-sm-3">
                      <label for="total_distance" class="form-label">
                      Quãng đường
                      </label>
                      <input
                        type="number"
                        name="total_distance"
                        placeholder="Quãng đường (Km)"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.total_distance}
                      />
                  </div>
                  <div className="col-sm-2">
                      <label for="travel_time" class="form-label">
                      Tổng giờ đi
                      </label>
                      <input
                        type="text"
                        name="travel_time"
                        placeholder="Số giờ"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.travel_time}
                      />
                  </div>
                  
                  <div className="col-sm-3">
                      <label for="total_amount" class="form-label">
                      Giá vé
                      </label>
                      <input
                        type="number"
                        name="total_amount"
                        placeholder="Giá vé (Vnđ)"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={route.total_amount}
                      />
                  </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary col-3 me-1"
                      type="submit"
                    >
                      <i class="bi bi-file-plus-fill"></i> Lưu
                    </button>
                    <button
                      onClick={() => resetForm()}
                      className="btn btn-danger col-3"
                      type="reset"
                    >
                      <i class="bi bi-arrow-clockwise"></i> Đặt lại
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div class="container-lg addBooking mt-3">
          {/* Danh sách lịch trình */}
          <div class="bookingList text-center">
            <h4 className='titleBookingList fs-5'><b>DANH SÁCH TUYẾN XE</b></h4>
            <table class="table">
              <thead className="col-12">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Mã tuyến</th>
                  <th scope="col">Mẫu xe</th>
                  <th scope="col">Thành phố đi</th>
                  <th scope="col">Thành phố đến</th>
                  <th scope="col">Thời gian xuất phát</th>
                  <th scope="col">Tổng quãng đường</th>
                  <th scope="col">Tổng thời gian đi</th>
                  <th scope="col">Giá vé</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {routeList.map((r, num) => (
                  <tr>
                    <th>{num + 1}</th>
                    <td>{r.route_id}</td>
                    <td>{r.vehicle_id}</td>
                    <td>{r.city_from}</td>
                    <td>{r.city_to}</td>
                    <td>{moment.utc(r.pickup_datetime).format('DD/MM/YYYY HH:mm')}</td>
                    <td>{r.total_distance} Km</td>
                    <td>{r.travel_time} giờ</td>
                    <td>{r.total_amount} VNĐ</td> 
                    <td>
                      <button
                        onClick={() => {
                          editRoute(r.route_id);
                        }}
                        className="btn btn-sm btn-primary me-1"
                      >
                        Cập nhật
                      </button>
                      <button
                        onClick={() => {
                          deleteRoute(r.route_id);
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default AddRoute