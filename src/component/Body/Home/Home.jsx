import React, {useEffect, useState }  from "react";
import "./Home.css";
import axios from 'axios';

import { Link } from "react-router-dom";
import routeService from '../../../service/route.service';



const Home = () => {
  //Ẩn hiện input Date (Ngày về) theo radio button
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  //Đổi vị trí 2 input điểm đi và điểm đến
  const [inputPlaceFrom, setInputPlaceFrom] = useState('');
  const [inputPlaceTo, setInputPlaceTo] = useState('');
  
  const handleInputChange = (event, input) => {
    if (input === 'placeFrom') {
      setInputPlaceFrom(event.target.value);
    } else if (input === 'placeTo') {
      setInputPlaceTo(event.target.value);
    }
  }
  
  const handleSwapValues = () => {
    const tempValue = inputPlaceFrom;
    setInputPlaceFrom(inputPlaceTo);
    setInputPlaceTo(tempValue);
  }
  //Không cho phép chọn ngày đã qua
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const currentDate = new Date();
    const inputDate = new Date(event.target.value);
    const inputDates = new Date();
    inputDates.setDate(inputDate.getDate() + 1);

    // Kiểm tra ngày đã chọn có nhỏ hơn hoặc bằng ngày hiện tại không
    if (inputDates <= currentDate) {
      alert("Vui lòng chọn một ngày trong tương lai!");
      setSelectedDate("");
    } else {
      setSelectedDate(event.target.value);
    }
  };
  
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
    //
    const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_URL = "http://localhost:8080";
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL + `/api/routes?cityFrom=${cityFrom}&cityTo=${cityTo}`);
      const routes = response.data;

      setSearchResults(routes);

    } catch (error) {
      console.log(error);
    }
  };
  //Kết quả
  const [isDivVisible, setIsDivVisible] = useState();

  const handleButtonClick = () => {
    setIsDivVisible(true);
  };
  return (    
    <>
      <div className="container">
        {/* Tìm chuyến xe */}
        <form onSubmit={handleSearch} className="book-ticket-container">
        <p class="title text-danger"><b>TÌM TUYẾN XE</b></p>
          {/* s */}

          <div className="place-select-container row">
          <div className="place-select-from col-4" >
            <label htmlFor="place-from" className="place-from">Điểm đi</label>
            <input list="place-list" className="form-control" placeholder="Chọn điểm đi" id="place-from" value={cityFrom} onChange={(e) => setCityFrom(e.target.value)}/>
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
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
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
              
            </datalist>
            
          </div>
          {/* <button onClick={handleSwapValues} className="arrow-change"><i class="bi bi-arrow-left-right"></i></button> */}
          <div className="place-select-to col-4">
            <label htmlFor="place-to" className="place-to">Điểm đến</label>
            <input list="place-list" className="form-control" placeholder="Chọn điểm đến" id="place-to" value={cityTo} onChange={(e) => setCityTo(e.target.value)}/>
          </div>
        </div>

        {/* <div className="date-select-container">
          <div className="date-select-from">
            <label htmlFor="date-from" className="date-from">Ngày đi</label>
            <input type="date" value={selectedDate} onChange={handleDateChange} className="form-control" id="date-from" />
          </div>
          <div className="date-select-to">
            <label htmlFor="date-to" className="date-to">Ngày về</label>
            {selectedOption === 'roundTrip' && (
            <input type="date"  className="form-control" id="dateTo"/>
            )}
          </div>
        </div> */}
        <div className="text-center">
        <button type="submit" onClick={handleButtonClick} className="btn btn-success search-car" id="search-car"><i class="bi bi-search"></i>   Tìm chuyến xe</button>
        </div>
        </form>
        {isDivVisible &&
        <div className="common-routes-container">
          <p class="title text-danger my-1"><b>Kết quả tìm kiếm</b></p>
          <div className="items">
          {searchResults.length > 0 ? (
              <div className="row">
              {searchResults.map((r) => (
                <div className="col-12 col-items" key={r.route_id}>
                  <a className="link-schedule" href="#">
                    <Link to={'routeDetail/' + r.route_id}>
                    <img className="photo-schedule" src="https://xevati.com/wp-content/uploads/2023/07/Nha-Hoang-Huy-Xe-Ninh-Thuan-di-Tay-Ninh.jpg" alt='image-chuyen-xe'></img>
                    <div className="text-schedule">
                      <p class="title-schedule fs-5">{r.city_from} ⇒ {r.city_to}</p>
                      <div className="details-schedule">
                        <div className="distance"><i class="bi bi-geo-alt-fill mx-1"></i>{r.total_distance} Km</div>
                        <div className="time"><i class="bi bi-stopwatch-fill mx-1"></i>{r.travel_time} giờ</div>
                        <div className="price"><i class="bi bi-cash mx-1"></i>{r.total_amount}đ</div>
                    </div>
                    </div>
                    </Link>
                  </a>
                </div>
                ))}
              </div>
              ) : (
                <p>Không tìm thấy kết quả</p>
              )}
          </div>   
        </div>
}
        
        {/* Tuyến xe mới */}
        <div className="common-routes-container">
          <p class="title text-danger my-1"><b>CÁC TUYẾN PHỔ BIẾN</b></p>
          <div className="items">
              <div className="row">
              {routeList.map((r) => (
                <div className="col-6 col-items">
                  <a className="link-schedule" href="#">
                    <Link to={'routeDetail/' + r.route_id}>
                    <img className="photo-schedule" src="https://xevati.com/wp-content/uploads/2023/07/Nha-Hoang-Huy-Xe-Ninh-Thuan-di-Tay-Ninh.jpg" alt='image-chuyen-xe'></img>
                    <div className="text-schedule">
                      <p class="title-schedule fs-5">{r.city_from} ⇒ {r.city_to}</p>
                      <div className="details-schedule">
                        <div className="distance"><i class="bi bi-geo-alt-fill mx-1"></i>{r.total_distance} Km</div>
                        <div className="time"><i class="bi bi-stopwatch-fill mx-1"></i>{r.travel_time} giờ</div>
                        <div className="price"><i class="bi bi-cash mx-1"></i>{r.total_amount}đ</div>
                    </div>
                    </div>
                    </Link>
                  </a>
                </div>
                ))}
              </div>
          </div>   
        </div>
      </div>
      

    </>
    
  );
};





export default Home;
