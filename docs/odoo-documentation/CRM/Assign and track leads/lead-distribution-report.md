---
sidebar_position: 6
---

# Lead distribution report

- Một _lead distribution report_ có thể được dùng để xem liệu leads có được phân bổ công bằng cho các salesperson hay không.
- Nó cũng được dùng để xem việc phân bổ các leads chất lượng và tần suất salesperson nhận được các leads.

- _Lead distribution report_ có thể chạy hàng tuần để giúp salesperson tiếp cận đúng hướng, đồng thời cung cấp cho họ nhiều leads chất lượng
  báo cáo này cũng cho phép đánh giá xem liệu một salesperson có hoạt động hiệu quả hay không, liệu salesperson có thường
  xuyên để mất leads chất lượng hay không và tổng thể bao nhiêu % leads chất lượng được giữ lại.

## Create lead distribution reports

- Vào `CRM -> Reporting -> Pipeline`, xem `Pipeline Analysis` dashboard, bỏ các filter mặc định trên `Search` bar.

- Thêm `Custom Filter` tại cột `Filter` tại menu dropdown sau khi click vào nút mũi tên xuống.

### Essential filters

#### Lead creation date

- Bên dưới **Match any of the following rules**, có giá trị **Country**, gõ vào **Created On** để thay thế, chọn operator và nhập ngày cần so sánh.

#### Sales Team

- Click **New rule** chọn **Sales Team**, operator là **contains**, nhập giá trị muốn lọc

#### Contact method

- Click **New rule** chọn **Phone** hoặc **Email**, operator là **is set**

#### Active status

- Click biểu tượng rẽ nhánh chọn **Add nested rule**, đầu dòng là **any**, chọn field **Active** operator là **is set**, thêm field chọn tiếp **Active**, operator là **is not set**

#### Group by

- Sau khi click **Search** sau khi áp dụng filters , click nút mũi tên xuống ở `Search` bar rồi tại cột **Group By** chọn **Custom Group By**
- Chọn **Salesperson** trong group section, sau khi **Confirm**, **Pipeline Analysis** sẽ hiển thị ra report.
- **Tip**: Lưu lại filters hiện tại bằng việc click vào **Save** button ở **Favorites** section.

### Filter for quality leads

- Có thể thêm các filters sau đây để cải thiện kết quả tìm kiếm các leads chất lượng.
  - **Referrer-by**
  - **Source**
  - **Notes**
  - **Tags**
  - **Email**
  - **Salesperson**
