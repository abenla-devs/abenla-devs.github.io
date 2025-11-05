---
sidebar_position: 2
---

# Galeto

**Gelato** là một nền tảng **global print-on-demand** (in theo yêu cầu toàn cầu) tích hợp với Odoo để **sync product catalogs** (đồng bộ hóa danh mục sản phẩm) và **automate order fulfillment** (tự động hóa việc hoàn tất đơn hàng).

Việc kết nối các dịch vụ của **Gelato** với ứng dụng **Sales** và **eCommerce** của Odoo cho phép các tính năng sau:

- **Sync Odoo sales orders with Gelato for automated order fulfillment** (Đồng bộ hóa đơn hàng bán hàng Odoo với Gelato để tự động hóa việc hoàn tất đơn hàng).
- **Create and manage Gelato products within Odoo** (Tạo và quản lý các sản phẩm Gelato ngay trong Odoo).
- Hỗ trợ **product variant and image sync** (đồng bộ hóa biến thể sản phẩm và hình ảnh).
- **Configure delivery options in Odoo** (Cấu hình các tùy chọn giao hàng trong Odoo).
- **Receive order updates via webhooks** (Nhận cập nhật đơn hàng qua webhooks).

---

## I. Cấu hình (**Configuration**)

### 1. Yêu cầu Tiên quyết (**Important**)

Thông tin công ty (**Company name** và **Billing address** - Tên công ty và Địa chỉ thanh toán) trong tài khoản **Gelato** **must** (bắt buộc) phải khớp với thông tin công ty trong cơ sở dữ liệu Odoo. Điều này là cần thiết để các đơn hàng bán hàng được xác nhận và gửi đến **Gelato** để hoàn tất.

### 2. Cấu hình **API keys** và **Webhooks** trong **Gelato**

Trước khi cấu hình **Gelato connector** trong Odoo, cần lấy thông tin xác thực **API credentials** và **webhooks** từ tài khoản **Gelato**.

#### A. **API Key**

- **API Key** là một **unique authentication token** (mã xác thực duy nhất) cho phép Odoo **securely communicate with Gelato’s API** (giao tiếp an toàn với API của Gelato).
- **API connectors** cho phép ứng dụng **Odoo Sales** gửi và nhận dữ liệu từ **Gelato** để xử lý đơn hàng.
- **Quy trình tạo Key:** Đăng nhập vào **Gelato**, nhấp vào **Developer**, sau đó vào **API keys**. Nhấp **Add API Key**, nhập tên, và nhấp **Create Key**.
- **Quan trọng:** Phải **Copy the generated API key** (Sao chép API key đã tạo) và **store it somewhere safe and secure** (lưu trữ nó ở nơi an toàn) trước khi rời khỏi trang này, vì khóa sẽ không thể sao chép lại sau khi làm mới hoặc thoát.

#### B. **Webhook**

- **Webhook** là một **automated notification system** (hệ thống thông báo tự động) giúp **instantly updates Odoo** (cập nhật Odoo ngay lập tức) khi **Gelato processes, ships, or delivers an order** (Gelato xử lý, vận chuyển hoặc giao đơn hàng).
- **Webhook** cung cấp **real-time tracking** (theo dõi thời gian thực) và **minimal manual intervention** (giảm thiểu can thiệp thủ công).
- **Quy trình tạo Webhook:** Truy cập **Developer ‣ Webhooks**. Nhấp **Add Webhook** để mở form **Create Webhook**.
  - **URL:** Dán **Odoo database URL** (URL cơ sở dữ liệu Odoo) với hậu tố **`/gelato/webhook`**. Ví dụ: `https://stealthywood.odoo.com/gelato/webhook`.
  - **Events:** Chọn **order_status_updated** để đảm bảo Odoo nhận được các thay đổi đơn hàng tự động.
  - **Method:** Chọn tùy chọn **HTTP Post**, là **request method** (phương thức yêu cầu) được sử dụng để gửi dữ liệu từ **Gelato** đến Odoo.
  - Tích chọn **I want to take Authorization to this webhook**.
  - **Header Name:** Nhập **signature** (chữ ký) để khớp với trường trong Odoo.
  - Nhấp **Generate Key** để tạo **Header Value**.
  - Nhấp **Create** để hoàn tất cấu hình.

### 3. Cấu hình **Gelato connector** trong Odoo

- Trong Odoo, điều hướng đến **Sales app ‣ Configuration ‣ Settings**.
- Kích hoạt **Gelato connector** trong phần **Connectors**.
- Dán **newly generated API keys** (API keys mới được tạo) và **webhook secret key** (khóa bí mật webhook) vào các trường tương ứng.
- Sau khi lưu, **Gelato** sẽ có sẵn trong các sản phẩm **Odoo Sales** và **eCommerce**.

## II. Đồng bộ hóa Sản phẩm **Gelato** với **Odoo Sales**

### 1. Lấy **Template ID** từ **Gelato**

- **It is recommended to have products already configured in Gelato before configuring them in Odoo** (Khuyến nghị sản phẩm đã được cấu hình trong Gelato trước khi cấu hình chúng trong Odoo).
- Để lấy **product ID** (ID sản phẩm) trong **Gelato**, điều hướng đến trang **Templates**. Chọn sản phẩm muốn đồng bộ, di chuột qua thẻ sản phẩm, nhấp vào biểu tượng menu (vertical ellipsis), sau đó nhấp **Copy Template ID**.

### 2. Tạo Sản phẩm **Odoo Sales**

1.  Điều hướng đến **Sales app ‣ Products ‣ Products**, chọn **New**.
2.  Nhập **product Name** (Tên sản phẩm).
3.  Trong tab **Sales**, tìm phần **Gelato**.
4.  Dán **copied template ID** (ID mẫu đã sao chép) vào trường **Template Reference**.
5.  Nhấp **Synchronize** (Đồng bộ hóa).

Việc đồng bộ hóa thành công sẽ kéo **Gelato product variant options** (các tùy chọn biến thể sản phẩm Gelato) vào sản phẩm Odoo mới được cấu hình.

### 3. Cấu hình Hình ảnh In (**Print Images**) và Biến thể (**Product variants**)

- Trong trường **Print Images** mới, nhấp vào **default** để đặt hình ảnh sản phẩm mặc định. Tải lên tệp hình ảnh, sau đó **Save & Close**.
- **Quan trọng:** Trường **Print Images** **must** (bắt buộc) phải được cấu hình trên **all Gelato products and their respective product variations** (tất cả các sản phẩm Gelato và các biến thể sản phẩm tương ứng của chúng) trước khi có thể đặt hàng.
- Các biến thể sản phẩm được đồng bộ sẽ xuất hiện trong tab **Attributes & Variants**. Có thể nhấp **Configure** để chỉnh sửa hình ảnh biến thể, phương thức giao hàng, định giá bổ sung, v.v..

## III. Đặt hàng Sản phẩm **Gelato** từ Odoo

- Sau khi đồng bộ hóa, sản phẩm **Gelato** có sẵn để đặt hàng trong Odoo thông qua **sales quotations** (báo giá bán hàng) hoặc trên cửa hàng **eCommerce**.
- **Gelato delivery options** (Các tùy chọn giao hàng của Gelato) được **automatically synchronized** (tự động đồng bộ hóa) sau khi cấu hình **API** và **webhook**.
- Để thêm giao hàng **Gelato**, nhấp vào **Add shipping** (Thêm vận chuyển) trên **sales order** (đơn hàng bán hàng).
- Chọn **Standard Delivery** (Giao hàng Tiêu chuẩn) hoặc **Express Delivery** (Giao hàng Nhanh) trong trường **Shipping Method** (Phương thức Vận chuyển), sau đó nhấp **Get rate** (Lấy giá).
- Khi **quotation is confirmed** (báo giá được xác nhận), nó trở thành **active sales order** (đơn hàng bán hàng hoạt động), và đơn hàng được gửi đến **Gelato** để hoàn tất.
- **Gelato processes the order** (Gelato xử lý đơn hàng), **produces the product at the nearest fulfillment center** (sản xuất sản phẩm tại trung tâm hoàn tất gần nhất), và **ships it directly to the end-customer** (vận chuyển trực tiếp đến khách hàng cuối).

### Quan trọng: Giới hạn Đơn hàng

- Khi tạo **sales order** cho sản phẩm **Gelato** trong cơ sở dữ liệu, chỉ các sản phẩm Gelato mới có thể được thêm vào cùng một đơn hàng bán hàng
- **Multivendor orders** hiện chưa khả dụng với Gelato connector
