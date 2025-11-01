---
sidebar_position: 25
---

# Customer account

Tính năng **Customer account** cho phép khách hàng sử dụng tài khoản của mình để mua hàng. Có thể dùng để thanh toán thông qua thẻ tín dụng
hoặc nạp trước vào tài khoản để thanh toán sau

## Configuration

Để khách hàng có thể sử dụng tài khoản của mình làm tài khoản thanh toán, phải tạo phương thức thanh toán và cấu hình như sau:

1. Bật **Identify Customer** để buộc chọn khách hàng để cho phép dùng phương thức thanh toán này
2. Giữ trống field **Journal** để sử dụng tài khoản phải thu của khách
3. Chọn POS có thể áp dụng phương thức thanh toán này tại **Point of Sale** field

**Ghi chú**: đặt khoản tín dụng tối đa để ngăn khách vượt quá giới hạn tín dụng đã xác định, sau khi đạt số tiền tối đa, nút khách hàng đã chọn sẽ
chuyển thông báo sang màu cam

## Payment process

### Deposit money

Để gửi tiền vào tài khoản thanh toán của khách hàng cần:

1. Click **Customer** và chọn khách hàng từ danh sách hoặc tạo mới
2. Click vào hamburger menu icon và chọn **Deposit money**
3. Chọn phương thức thanh toán
4. Nhập số tiền cần gửi bằng keypad
5. **Validate** giao dịch
6. Click **Yes**

### Customer account as payment method

Để sử dụng customer account làm phương thức thanh toán cho giao dịch mua hàng:

1. Chọn phương thức thanh toán hoặc tạo mới cho khách hàng
2. Click **Customer** để mở danh sách khách hàng
3. Click **Invoice** button
4. **Validate** mua hàng

## Debt tracking

Khi khách hàng sử dụng tài khoản khách hàng của mình, số tiền mua hàng được ghi nhận là nợ cho đến khi được thanh toán hêt.
Để theo dõi các khoản nợ của khách hàng, vào `Point of Sale -> Orders -> Customers -> Customer Statements smart button` ở backend hoặc vào profile của khách hàng ở POS session

## Due amount settlement

Để thanh toán số tiền đến hạn của khách hàng, đăng ký thanh toán từ hóa đơn hoặc từ POS interface theo các bước sau:

1. Click **Customer** và tìm khách hàng cần tìm
2. Click **hamburger icon** kế bên tên khách hàng
3. Chọn **Settle orders** hoặc **Settle invoices**
4. Chọn đơn hàng hoặc hóa đơn để thanh toán.
5. Click **Payment** và chọn phương thức thanh toán phù hợp
6. Click **Validate**
7. Click **Yes**
