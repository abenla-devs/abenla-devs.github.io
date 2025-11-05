---
sidebar_position: 3
---

# QR Code payments

Thanh toán bằng mã QR cho phép người dùng tạo mã mà khách hàng có thể quét bằng app ngân hàng của họ để bắt đầu chuyển khoản ngân hàng
hoặc thanh toán ngay lập tức.

## Configuration

### Active and setup QR code payments

Vào `Accounting -> Configuration -> Settings`:

1. Kích hoạt hoặc nâng cấp gói nội địa hóa tài chính cho quốc gia của bạn tại **Fiscal Localization** section
2. Activate **QR codes** dưới **Customer Payments**

Sau đó, tùy thuộc vào quốc gia nào mà làm theo tài liệu tương ứng trong bảng ở [link](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/payment_methods/qr_code_payment.html) sau

### Create the payment method

1. Mở `Point of Sale`
2. Vào Configuratin -> Payment Methods và tạo phương thức thanh toán
3. Đặt bank-type journal
4. Chọn Bank App (QR Code) dưới Integration
5. Chọn QR Code Format từ danh sách dropdown

- Chọn **EMV Merchant-Presented QR-code** cho QR code types

Sau khi phương thức thanh toán được tạo, ở POS settings, thêm phương thức thanh toán mới cho POS ở mục **Payment**

### Register payments using QR codes

Khi xử lý thanh toán, chọn phương thức thanh toán là QR code payments. Một mã QR code được sinh ra và hiển thị trên màn hình, khách hàng
có thể scan và thanh toán trên app ngân hàng của họ

Chọn **Confirm Payment** để validate giao dịch.
