---
sidebar_position: 1
---

# Payment methods

Cấu hình payment method vào `Point of Sale -> Configuration -> Payment Methods`, click `New` để tạo mới

1. Nhập tên
2. Kích hoạt các tùy chọn sau:

- Online Payment: để liên kết phương thức thanh toán với nhà cung cấp dịch vụ thanh toán trực tuyến, chọn trong field **Allow Providers** hoặc click **Payment Prodvider** để cài một
- Identify Customer: bược phải lựa chọn khách hàng trong quá trình thanh toán

3. Chọn Journal ưa thích để lưu nhật ký giao dịch
4. Chọn Point of Sale để áp dụng phương thức thanh toán
5. Đặt Integration:

- None required: cho thanh toán tiền mặt
- Terminal: cài đặt một thiết bị quẹt thẻ
- Bank App (QR code): ít nhất một tài khoản ngân hàng vào journal để cho phép thanh toán bằng mã QR bằng bank app. Chọn QR Code Format trong form
- Cash Machine (Glory): kết nối tới máy rút tiền Glory tự động hóa các giao dịch tiền mặt của POS

6. Lưu
