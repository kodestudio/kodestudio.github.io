var headerContent = `

<div class="container d-flex align-items-center">

      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
      <!-- Uncomment below if you prefer to use text as a logo -->
      <h1 class="logo mr-auto"><a href="index.html">Hydro OS</a></h1>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Trang chủ</a></li>
          <li><a href="Download.html">Tải về</a></li>
          <li><a href="about.html">Về chúng tôi</a></li>
          <li><a href="#portfolio">Hỗ trợ</a></li>
          <li class="drop-down"><a href="">Thêm</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

        </ul>
      </nav><!-- .nav-menu -->

    </div>

`;

var footerContent = `
<div class="footer-newsletter">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <h4>Nhận tin tức mới nhất từ chúng tôi!</h4>
      <form action="" method="post">
        <input type="email" name="email"><input type="submit" value="Đăng ký">
      </form>
    </div>
  </div>
</div>
</div>

<div class="footer-top">
<div class="container">
  <div class="row">

    <div class="col-lg-3 col-md-6 footer-contact">
      <h3>Kode</h3>
      <p>
        <strong>Địa chỉ:</strong><br>
        Khóm 7 <br>
        Thị trấn Trần Văn Thời<br>
        Huyện Trần Văn Thời<br>
        Cà Mau <br><br>
        <strong>Điện thoại:</strong><br>
        +84<br>
        <strong>Email:</strong><br>
        contact@kodelang.dev<br>
        kodestudio.dev@gmail.com<br>
      </p>
    </div>


    <div class="col-lg-3 col-md-6 footer-contact">
      <p></p>
    </div>


    <div class="col-lg-3 col-md-6 footer-contact">
      <h3></h3>
      <p>
        
      </p>
    </div>

    <div class="col-lg-3 col-md-6 footer-links">
      <h4>Liên kết</h4>
      <ul>
        <li><i class="bx bx-chevron-right"></i> <a href="https://kodelang.dev/hydroos">Home</a></li>
        <li><i class="bx bx-chevron-right"></i> <a href="download.html">Tải về</a></li>
        <li><i class="bx bx-chevron-right"></i> <a href="about.html">Về chúng tôi</a></li>
        <li><i class="bx bx-chevron-right"></i> <a href="help.html">Hỗ trợ</a></li>
        <li><i class="bx bx-chevron-right"></i> <a href="#">Cộng đồng Hydro OS</a></li>
      </ul>
    </div>



  </div>
</div>
</div>

<div class="container py-4">
<div class="copyright">
  &copy; Copyright <strong><span>Kode</span></strong> 2021. All Rights Reserved.
</div>
<div class="credits">
  <!-- All the links in the footer should remain intact. -->
  <!-- You can delete the links only if you purchased the pro version. -->
  <!-- Licensing information: https://bootstrapmade.com/license/ -->
  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/butterfly-free-bootstrap-theme/ -->
  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> and edit with ❤ by <a href="https://github.com/kodestudio">@koder</a>.
</div>
</div>
`;


document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;
