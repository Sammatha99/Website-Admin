var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'trang chủ' });
});

//quản lý người dùng ==========================
router.get('/quan-ly-nguoi-dung', function(req, res, next) {
  res.render('user/userList', { title: 'quản lý người dùng' });
});

router.get('/sua-thong-tin-nguoi-dung', function(req, res, next) {
  res.render('user/update', { title: 'Express' });
});

router.get('/xem-thong-tin-nguoi-dung', function(req, res, next) {
  res.render('user/user', { title: 'Express' });
});

//gian hàng ===================================
router.get('/quan-ly-gian-hang', function(req, res, next) {
  res.render('shop/shopList', { title: 'quản lý gian hàng ' });
});

router.get('/quan-ly-san-pham', function(req, res, next) {
  res.render('shop/productList', { title: 'quản lý sản phẩm' });
});

router.get('/top-10', function(req, res, next) {
  res.render('shop/top10', { title: 'top 10 sản phẩm bán chạy' });
});

router.get('/xem-thong-tin-gian-hang', function(req, res, next) {
  res.render('shop/shop', { title: 'quản lý gian hàng ' });
});

router.get('/xem-thong-tin-san-pham', function(req, res, next) {
  res.render('shop/product', { title: 'quản lý sản phẩm' });
});

//đơn hàng=====================================
router.get('/quan-ly-don-hang', function(req, res, next) {
  res.render('bill/billList', { title: ' quản lý đơn hàng ' });
});

router.get('/xem-thong-tin-don-hang', function(req, res, next) {
  res.render('bill/bill', { title: 'xem thông tin đơn hàng' });
});

//thống kê bán hàng ===========================
router.get('/thong-ke-doanh-thu', function(req, res, next) {
  res.render('chart/chart', { title: 'thống kê doanh thu' });
});

//admin =======================================
router.get('/dang-nhap', function(req, res, next) {
  res.render('admin/login', { title: 'admin đăng nhập' });
});

router.get('/quen-mat-khau', function (req, res, next){
  res.render('admin/forgetPass', { title: 'quên mật khẩu' });
});



/*
quản lý người dùng:
      --> thay đổi thông tin cá nhân người dùng
gian hàng:
          gian hàng
          sản phẩm 
          top 10 sản phẩm
đơn hàng: 
thống kê doanh thu
 */

module.exports = router;
