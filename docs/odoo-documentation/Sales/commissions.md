---
sidebar_position: 4
---

# Commisions

Tính năng **Hoa hồng (Commissions)** trong ứng dụng Bán hàng (**Sales**) của Odoo là một công cụ giúp doanh nghiệp tạo ra cấu trúc thưởng linh hoạt để khuyến khích đội ngũ bán hàng.

Dưới đây là tóm tắt các nội dung quan trọng về tính năng này, được trình bày một cách dễ hiểu:

---

## Tóm Tắt Tính Năng Hoa Hồng (Commissions) trong Odoo

### I. Mục đích và Cấu hình

- **Mục đích:** Hoa hồng là công cụ mạnh mẽ để **thúc đẩy các thành viên đội ngũ bán hàng**. Chúng nhằm mục đích khuyến khích hiệu suất, tăng năng suất, và thúc đẩy cạnh tranh lành mạnh.
- **Thiết lập:** Để kích hoạt, người dùng cần vào `Sales app ‣ Configuration ‣ Settings`, cuộn đến phần _Invoicing_, và chọn hộp kiểm **Commissions**. Sau khi lưu, menu **Commissions** sẽ xuất hiện.

### II. Cấu trúc Kế hoạch Hoa hồng

Mỗi kế hoạch hoa hồng được xây dựng dựa trên các thành phần sau:

| Thành phần                               | Ý nghĩa Quan trọng                                                                                     | Tùy chọn                                                                           | Nguồn |
| :--------------------------------------- | :----------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- | :---- |
| **Based on** (Dựa trên)                  | Xác định cơ sở để trao thưởng hoa hồng.                                                                | **Targets** (Mục tiêu) hoặc **Achievements** (Thành tích).                         |       |
| **per** (Áp dụng cho)                    | Cho biết kế hoạch áp dụng cho đối tượng nào.                                                           | **Cá nhân** (individual salespeople) hoặc **Toàn bộ đội ngũ** (entire sales team). |       |
| **Target Frequency** (Tần suất Mục tiêu) | Thiết lập tần suất Mục tiêu được đặt lại và đánh giá.                                                  | **Monthly** (Hàng tháng), **Quarterly** (Hàng quý), hoặc **Yearly** (Hàng năm).    |       |
| **Tần suất Mục tiêu**                    | Hàng tháng là mục tiêu ngắn hạn; Hàng quý phù hợp với chu kỳ kinh doanh; Hàng năm là mục tiêu dài hạn. |                                                                                    |       |

### III. Hai Loại Kế hoạch Hoa hồng Chính

Odoo hỗ trợ hai loại kế hoạch hoa hồng khác nhau, dựa trên cách tính toán phần thưởng:

#### 1. Kế hoạch Dựa trên Mục tiêu (Target-based Plans)

- **Tính chất:** Hoa hồng được trao dựa trên **phần trăm đạt được** của mục tiêu bán hàng cố định, đã được xác định trước.
- **Mục đích:** Lý tưởng để đặt các **mục tiêu rõ ràng, có thể đo lường** (ví dụ: lập hóa đơn một số tiền cụ thể trong quý).
- **Levels (Cấp độ):** Có thể thêm các cấp độ hoa hồng để cung cấp động lực bổ sung.
  - Các cấp độ này cho phép nhân viên kiếm được hoa hồng ngay cả khi họ **không đạt 100%** mục tiêu.
  - Các cấp độ có thể tăng **vượt quá 100%** (ví dụ: lên đến 300%) để thưởng cho việc vượt mục tiêu.
  - _Lưu ý:_ Nếu không thêm cấp độ trên 100%, nhân viên **không** thể kiếm được hoa hồng vượt quá mức đã nêu.

#### 2. Kế hoạch Dựa trên Thành tích (Achievement-based Plans)

- **Tính chất:** Nhân viên bán hàng kiếm được một **phần trăm giá trị hóa đơn** của họ dưới dạng hoa hồng.
- **Mục đích:** Lý tưởng để thưởng cho hoạt động bán hàng một cách **nhất quán**, không phụ thuộc vào việc đạt được các mục tiêu cụ thể.
- **Cơ sở tính toán:** Được tính toán dựa trên **thành tích thực tế** bằng một tỷ lệ cố định, không thay đổi.

### IV. Các Thước đo Hiệu suất (Achievements)

Hiệu suất có thể được đo lường bằng nhiều cách khác nhau, được cấu hình trong tab _Achievements_ của mỗi kế hoạch:

| Thước đo Hiệu suất    | Định nghĩa                                            | Ghi chú                                                            | Nguồn |
| :-------------------- | :---------------------------------------------------- | :----------------------------------------------------------------- | :---- |
| **Amount Sold**       | Tổng giá trị của các đơn hàng bán hàng (SOs).         |                                                                    |       |
| **Amount Invoiced**   | Tổng giá trị của các hóa đơn đã được xác nhận.        |                                                                    |       |
| **Quantity Sold**     | Tổng số lượng đơn vị đã bán qua SOs.                  |                                                                    |       |
| **Quantity Invoiced** | Tổng số lượng đơn vị đã lập hóa đơn.                  |                                                                    |       |
| **Margin**            | Biên lợi nhuận (giá bán trừ đi giá vốn).              |                                                                    |       |
| **MRR**               | Doanh thu định kỳ hàng tháng mới từ bán hàng đăng ký. | Tùy chọn này chỉ có sẵn nếu ứng dụng _Subscriptions_ được cài đặt. |       |

_Ghi chú:_ Bất kể kế hoạch dựa trên Mục tiêu hay Thành tích, **mỗi kế hoạch đều cần được cấu hình cả Thành tích và Mục tiêu**.

### V. Phê duyệt và Quản lý Kế hoạch

- **Phê duyệt:** Sau khi xác nhận chi tiết kế hoạch, phải nhấp vào **Approve** (Phê duyệt). Điều này chuyển kế hoạch từ giai đoạn _Draft_ (Nháp) sang giai đoạn _Approved_ (Đã Phê duyệt).
- **Hạn chế Chỉnh sửa:** Các kế hoạch hoa hồng ở giai đoạn _Approved_ **không thể chỉnh sửa**. Để chỉnh sửa, kế hoạch phải được **Reset to Draft** trước.
- **Theo dõi Tự động:** Sau khi kế hoạch được phê duyệt, Odoo sẽ tự động theo dõi hiệu suất và tính toán hoa hồng dựa trên các thông số đã thiết lập.
