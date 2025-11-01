---
sidebar_position: 6
---

# Self-signed certificate for ePOS printers

- Vài models máy in có thể sử dụng không cần IoT system có thể yêu cầu HTTPS protocol để thiết lập kết nối bảo mật giữa trình duyệt và máy in. Tuy nhiên
  cố truy cập IP bằng HTTPS sẽ dẫn đến cảnh báo trên các trình duyệt.

## Generate, export, and import self-signed certificated

- Bạn phải tạo ra self-signed certificate để đảm bảo việc kết nối từ browser tới ePOS
- Để cài đặt, làm theo [hướng dẫn](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/configuration/epos_ssc.html#generate-export-and-import-self-signed-certificates) từ Odoo
