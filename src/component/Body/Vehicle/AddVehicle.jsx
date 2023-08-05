import React, { useEffect, useState } from "react";
import vehicleService from "../../../service/vehicle.service";
import "./AddVehicle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVehicle = () => {
  const [vehicle, setVehicle] = useState({
    brand: "",
    model: "",
    seat_number: "",
    vehicle_number: "",
  });

  const resetForm = () => {
    setVehicle({
      brand: "",
      model: "",
      seat_number: "",
      vehicle_number: "",
    });
  };

  //Thêm xe
  const VehicleAdd = (e) => {
    e.preventDefault();

    vehicleService
      .saveVehicles(vehicle)
      .then((res) => {
        console.log("Add Successfully");
        setVehicle({
          brand: "",
          model: "",
          seat_number: "",
          vehicle_number: "",
        });
        init();
        notifyAdd();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setVehicle({ ...vehicle, [e.target.name]: value });
  };

  //Thông báo xóa xe thành công
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

    //Thông báo xóa xe không thành công
  const notifyDeleteFail = () =>
  toast.error("Đã được đặt chỗ. Không thể xóa!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  //Thông báo thêm xe thành công
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

  const init = () => {
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
    init();
  }, []);

  
  //Xóa xe
  const deleteVehicle = (id) => {
    vehicleService
      .deleteVehicle(id)
      .then((res) => {
        console.log("Delete Successfully");
        init();
        notifyDelete();
      })
      .catch((error) => {
        console.log(error);
        notifyDeleteFail();
      });
  };

  //Cập nhật xe
  const editVehicle = (id) => {
    vehicleService.getVehicleById(id).then((res)=>{
      setVehicle(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  };


  return (
    <>
      <ToastContainer autoClose={1500} />
      <div class="container mt-3">
        <div class="row col-12">
          <div class="col-md-5" id="vehicle_add">
            <div class="card">
              <div class="card-header text-center fs-5"><b>THÔNG TIN PHƯƠNG TIỆN</b></div>
              <div class="card-body">
                <form onSubmit={(e) => VehicleAdd(e)}>
                  <div class="mb-3">
                    <label for="brand" class="form-label">
                      Hãng xe
                    </label>
                    <input
                      type="text"
                      name="brand"
                      placeholder="Nhập hãng xe"
                      class="form-control"
                      required="required"
                      onChange={(e) => handleChange(e)}
                      value={vehicle.brand}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="model" class="form-label">
                      Mẫu xe
                    </label>
                    <input
                      type="text"
                      name="model"
                      placeholder="Nhập mẫu xe"
                      class="form-control"
                      required="required"
                      onChange={(e) => handleChange(e)}
                      value={vehicle.model}
                    />
                  </div>
                  <div className="row mb-3">
                    <div class="col-sm-6">
                      <label for="seat_number" class="form-label">
                        Số lượng ghế ngồi
                      </label>
                      <input
                        type="number"
                        name="seat_number"
                        placeholder="Nhập số lượng ghế ngồi"
                        class="form-control"
                        onChange={(e) => handleChange(e)}
                        value={vehicle.seat_number}
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="vehicle_number" class="form-label">
                        Biển số xe
                      </label>
                      <input
                        type="text"
                        name="vehicle_number"
                        placeholder="Nhập biển số xe"
                        class="form-control"
                        required="required"
                        onChange={(e) => handleChange(e)}
                        value={vehicle.vehicle_number}
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
          {/* Danh sách phương tiện */}
          <div class="col-md-7 vehicleList">
            <h4 className="fs-5"><b>DANH SÁCH PHƯƠNG TIỆN</b></h4>

            <table class="table">
              <thead className="col-12">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Mã Xe</th>
                  <th scope="col">Hãng Xe</th>
                  <th scope="col">Mẫu xe</th>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Biển số</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {vehicleList.map((v, num) => (
                  <tr>
                    <th>{num + 1}</th>
                    <td>{v.vehicle_id}</td>
                    <td>{v.brand}</td>
                    <td>{v.model}</td>
                    <td>{v.seat_number}</td>
                    <td>{v.vehicle_number}</td>
                    <td>
                      <button
                        onClick={() => {
                          editVehicle(v.vehicle_id);
                        }}
                        className="btn btn-sm btn-primary me-1"
                      >
                        Cập nhật
                      </button>
                      <button
                        onClick={() => {
                          deleteVehicle(v.vehicle_id);
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
      </div>
    </>
  );
};

export default AddVehicle;
