---
sidebar_position: 3
---

# Hardware

## Customer display

- Cung cấp thông tin theo thời gian thực trên màn hình phụ cho khách hàng trong quá trình thanh toán. Màn hình này cũng hiển thị các mặt hàng trong giỏ hàng
  subtotal khi các mặt hàng được thêm vào và thông tin chi tiết trong suốt quá trình thanh toán. Nó cũng hiển thị tổng số tiền, phương thức thanh toán đã chọn
  và bất cứ thay đổi hoàn trả nào

- **Ghi chú**: màn hình của khách hàng và POS nên có kích thước tối thiểu 6 inches.

### Configuration

- Dựa theo POS setup, tính năng có thể được hiển thị trực tiếp trên màn hình phụ được kết nối qua USB hoặc HDMI hoặc màn hình được kết nối thông qua hệ thống IoT

- Có thể thay đổi hình nền cho màn hình hiển thị bằng cách vào `Point of Sale -> Configuration -> Settings` tìm mục **Connected Devices**, sau đó click **Upload you file**

- Nếu màn hình sử dụng hệ thống IoT:
  1. Vào POS settings
  2. Enable **IoT Box**
  3. **Save**
  4. Kết nối và cấu hình IoT system cho màn hình.
  5. Về lại POS settings và chọn một màn hình IoT đã kết nối sử dụng **Customer Display** field

### Opening the customer display

- Để mở màn hình hiển thị cho khách hàng, vào:
  - POS settings
  - Click **hamburger** icon
  - Click **Customer Display** icon, mở màn hình hiển thị khách hàng trong cửa sổ mới để kéo lên màn hình thứ hai hoặc trực tiếp trên màn hình được kết nối IoT

- **Ghi chú**: với màn kết nối hệ thống IoT, cần kết nối vào chung local network

- Với thiết bị đầu cuối POS chạy Odoo Android app hỗ trợ 2 màn hình:
  1. Active module Point of Sale
  2. Mở POS register
  3. Click **hamburger** icon
  4. Click **Customer Display** icon, mở màn hình hiển thị cho khách hàng.

### Scale

- Kết nối cân yêu cầu phải có hệ thống IoT

- Để cấu hình, vào POS settings:
  1. Enable IoT Box trong **Connected Devices**
  2. Chọn cân trong field **Electronic Scale**
  3. **Save**

- _Product Configuration_: Để cân sản phẩm, bạn cần điền thông tin cân nặng cho sản phẩm ở `Point of Sales -> Products -> Products` tại tab **General Information**, field Sales Price chọn _per Kg_
  Để config **Unit of Measure**, vào `Inventory -> Configuration -> Settings`, active **Unit of Measure** ở **Product** section.
  Sau đó, vào **Point of Sale** tab ở Products, active field **To Weigh With Scale**

- _Using Scale at POS_:
  1. Mở POS register
  2. Chọn sản phẩm để cân trên màn hình đặt hàng hoặc scan barcode
  3. Đặt sản phẩm lên cân, chờ cho số cân hiển thị trên cửa sổ popup
  4. Khi số cân được xác định, giá sẽ tự được tính
  5. Click **Order** thêm sản phẩm vào giỏ hàng
  6. Remove sản phẩm trước ra khỏi cân
