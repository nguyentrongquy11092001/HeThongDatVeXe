import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success justify-content-end  py-1">
        <a class="nav-link phone" href="tel:19001234">
          <i class="bi bi-telephone-fill"> 1900 1234</i>
        </a>
        <a class="nav-link phone" href="mailto:hotro@futa.vn">
          <i class="bi bi-envelope-fill"> hotro@futa.vn</i>
        </a>

        <a class="" href="https://www.facebook.com/">
          <img
            className="logo_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt="logo_facebook"
          ></img>
        </a>

        <a class="" href="https://www.instagram.com/">
          <img
            className="logo_icon"
            src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
            alt="logo_instagram"
          ></img>
        </a>

        <a class="" href="https://twitter.com/">
          <img
            className="logo_icon"
            src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png"
            alt="logo_twiter"
          ></img>
        </a>

        <a class="" href="https://www.linkedin.com/">
          <img
            className="logo_icon"
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt="logo_linkedin"
          ></img>
        </a>
        <button className="btn-danger btn mx-2">
          <i class="bi bi-person-circle"></i> Đăng nhập
        </button>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#">
            <img
              className="logo"
              src="https://futabus.vn/_nuxt/img/logo-buslines-small.b4bfbf7.png"
              alt="logo"
            ></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  TRANG CHỦ
                </Link>
              </li>
              <li class="nav-item">
              <Link
                  to="/addVehicle"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  QUẢN LÝ PHƯƠNG TIỆN
                </Link>
              </li>
              <li class="nav-item">
              <Link
                  to="/addRoute"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  QUẢN LÝ TUYẾN XE
                </Link>
              </li>
              <li class="nav-item">
              <Link
                  to="/bookingCar"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  DANH SÁCH XE
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TUYỂN DỤNG
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      TÀI XẾ
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      PHỤ XE
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VỊ TRÍ KHÁC
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
