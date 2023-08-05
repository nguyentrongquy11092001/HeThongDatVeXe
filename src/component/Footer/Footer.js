import React from 'react'

const Footer = () => {
  return (
    <>
        {/* Footer */}
      <footer class="bg-light mt-5" >
  <div class="container py-3">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <a class="navbar-brand" href="#">
            <img
              className="logo"
              src="https://futabus.vn/_nuxt/img/logo-buslines-small.b4bfbf7.png"
              alt="logo"
            ></img>
          </a>
        <p>CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG FUTA BUS LINES</p>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5>Truy cập nhanh</h5>
        <ul class="list-unstyled">
          <li><a className="text-dark" href="#">Trang chủ</a></li>
          <li><a className="text-dark" href="#">Về chúng tôi</a></li>
          <li><a className="text-dark" href="#">Dịch vụ</a></li>
          <li><a className="text-dark" href="#">Hỗ trợ</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5>Theo dõi FUTA</h5>
        <div>
          <a href="https://www.facebook.com/" target="_blank" class="text-dark me-2"><i class="bi bi-facebook"></i></a>
          <a href="https://twitter.com/" target="_blank" class="text-dark me-2"><i class="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank" class="text-dark me-2"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" class="text-dark me-2"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5>Liên hệ Chúng tôi</h5>
        <a class="nav-link text-dark" target="_blank" href="mailto:hotro@futa.vn">
          <i class="bi bi-envelope-fill"></i> hotro@futa.vn
        </a>
        <a class="nav-link text-dark" target="_blank" href="tel:19001234">
          <i class="bi bi-telephone-fill"></i> 1900 1234
        </a>
        <a class="nav-link text-dark" target="_blank" href="https://www.google.com/maps/search/S%E1%BB%91+01+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Dng+3,+Th%C3%A0nh+ph%E1%BB%91+%C4%90%C3%A0+L%E1%BA%A1t,+T%E1%BB%89nh+L%C3%A2m+%C4%90%E1%BB%93ng,+Vi%E1%BB%87t+Nam./@11.9287672,108.4433265,18z/data=!3m1!4b1?hl=vi-VN&entry=ttu">
          <i class="bi bi-geo-alt-fill"></i> Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam.
        </a>
      </div>
    </div>
  </div>
  <div class="text-center py-3 ftext bg-secondary">
    &copy; 2023 Designed by NTQ. All rights reserved.
  </div>
</footer>
    </>
  )
}

export default Footer