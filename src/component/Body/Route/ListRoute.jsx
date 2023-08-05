// import React, {useEffect, useState } from 'react'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AddRoute.css"
// import routeService from '../../../service/route.service';
// import vehicleService from "../../../service/vehicle.service";

// const ListRoute = () => {
//     //Danh sách xe
//   const [vehicleList, setVehicleList] = useState([]);

//   useEffect(() => {
//     init();
//   }, []);
  
//     const [route, setRoute] = useState({
//         user_id: "",
//         vehicle_id: "",
//         pickup_location: "",
//         city_from: "",
//         city_to: "",
//         pickup_datetime: "",
//         dropoff_location: "",
//         travel_time: "",
//         total_amount: "",
//         created_at: "",
//         total_distance: "",
//       });

//       const handleChange = (e) => {
//         const value = e.target.value;
//         setRoute({ ...route, [e.target.name]: value });
//       };

//       //Xóa lịch trình
//   const deleteRoute = (id) => {
//     routeService
//       .deleteRoute(id)
//       .then((res) => {
//         console.log("Delete Successfully");
//         init();
//         notifyDelete();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//    //Thông báo xóa lịch trình thành công
//    const notifyDelete = () =>
//    toast.success("Đã xóa!", {
//      position: "top-right",
//      autoClose: 1500,
//      hideProgressBar: false,
//      closeOnClick: true,
//      pauseOnHover: true,
//      draggable: true,
//      progress: undefined,
//      theme: "colored",
//    });
//   return (
//     <>
//         {/* Danh sách lịch trình */}
//         <div class="bookingList text-center">
//             <h4>Danh sách lịch trình chuyến xe</h4>
//             <table class="table">
//               <thead className="col-12">
//                 <tr>
//                   <th scope="col">STT</th>
//                   <th scope="col">Mẫu xe</th>
//                   <th scope="col">Thành phố đi</th>
//                   <th scope="col">Thời gian xuất phát</th>
//                   <th scope="col">Thành phố đến</th>
//                   <th scope="col">Tổng quãng đường</th>
//                   <th scope="col">Tổng thời gian đi</th>
//                   <th scope="col">Tổng giá vé</th>
//                   <th scope="col">Thời gian tạo</th>
//                   <th scope="col">Thao tác</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {routeList.map((r, num) => (
//                   <tr>
//                     <th>{num + 1}</th>
//                     <td>{r.vehicle_id}</td>
//                     <td>{r.city_from}</td>
//                     <td>{r.pickup_datetime}</td>
//                     <td>{r.city_to}</td>
//                     <td>{r.total_distance} Km</td>
//                     <td>{r.travel_time} giờ</td>
//                     <td>{r.total_amount} VNĐ</td>
//                     <td>{r.created_at}</td>
//                     <td>
//                       <button
//                         onClick={() => {
//                         //   editRoute(r.route_id);
//                         }}
//                         className="btn btn-sm btn-primary me-1"
//                       >
//                         Cập nhật
//                       </button>
//                       <button
//                         onClick={() => {
//                           deleteRoute(r.route_id);
//                         }}
//                         className="btn btn-sm btn-danger"
//                       >
//                         Xóa
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//     </>
//   )
// }

// export default ListRoute