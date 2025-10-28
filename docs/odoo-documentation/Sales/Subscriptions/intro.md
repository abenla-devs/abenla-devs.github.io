---
sidebar_position: 1
---

# Subscriptions

- Odoo `Subscription` app được thiết kế để quản lý doanh thu định kỳ thông qua các sản phẩm hoặc dịch vụ dựa trên gói đăng ký.
  Nó hỗ trợ lập hóa đơn tự động, quản lý gia hạn và theo dõi vòng đời khách hàng

- Subscriptions có thể được tạo thủ công hoặc tự động thông qua bán hàng online với các tùy chọn khác nhau để thanh toán định kỳ, tích hợp với các app
  khác như `Sales`, `CRM`, `Helpdesk` giúp hỗ trợ quy trình đăng ký toàn diện

## Setup recurring plans

- Vào `Subscriptions -> Configuration -> Recurring plans`, click **New** tạo mới, lưu ý các fields **Name**, **Details**, **Self-Service** và **Pricing**

- Ở **Detail**:
  - Billing Period: tần suất thanh toán subscription. Đặt đơn vị tuần, tháng,..
  - Automatic Closing: số ngày subscription được tự đóng nếu ko được thanh toán
  - Align to Period Start: đặt gói đăng ký mới định kỳ tính phí vào ngày đầu tiên của kỳ thanh toán tiếp theo. Khi subscription được
    mua ở giữa kỳ thanh toán, hóa đơn sẽ hiển thị chi phí giảm
  - Company
  - Invoice Email Template

- Ở **Self-service**
  - Closable: cho khách hàng khả năng đóng gói subscription của họ
  - Add Products: cho phép khách hàng thêm product mới hoặc sửa products hiện có của đơn đặt hàng định kỳ của họ. Khi được bật, báo giá _Upsell_
    được tạo bất cứ khi nào khách thay đổi số lượng products trong sales order của họ
  - Renew: cho phép khách hàng tạo _Renewal quotation_ cho gói đăng ký của họ
  - Optional plans: cho phép khách hàng đổi gói subscriptions của họ, khi đó, báo giá đăng ký mới hoặc gia hạn sẽ được tạo khi họ đổi.

- Ở **Pricing** tab
  - Điều chỉnh giá theo sản phẩm cụ thể của plan định kỳ
