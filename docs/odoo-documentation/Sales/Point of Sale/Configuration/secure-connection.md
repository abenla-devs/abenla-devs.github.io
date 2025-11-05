---
sidebar_postion: 4
---

# Secure connection (HTTPS)

- Nếu **Direct Devices** được kích hoạt trên POS settings, HTTP trở thành giao thức mặc định

## Force your POS to use a secure connection (HTTPS)

- Thêm một key mới vào `System Parameters` để bắt buộc POS sử dụng HTTPS prototcol

- Active **Developer** mode, vào `Settings -> Technical -> Parameters -> System Parameters` tạo mới một parameter với:
  - _Key_: _point_of_sale.enforce_https_
  - _Value_: _True_
