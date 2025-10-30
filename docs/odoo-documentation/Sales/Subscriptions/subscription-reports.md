---
sidebar_position: 7
---

# Subscription reports

- Odoo `Subscriptions` app cung cấp một số trang report giúp công ty phân tích hiệu quả hoạt động của subscriptions

- Ở menu **Reporting** có các menu con **Subscriptions**, **Retention**, **MRR Breakdown**, **MRR Timeline**
  - _Subscriptions_: view các data xác định liên quan tới các gói đăng ký định kỳ, số lượng subscriptions, các subscriptions ở trạng thái
    in-progress, paused hay các status khác
  - _Retention_: cung cấp một bảng có tổ chức của các tỷ lệ giữ chân của subscriptions trong bất kỳ khoảng thời gian nào
  - _MRR Breakdown_: báo cáo chia rõ ràng số liệu MRR và ARR cho các subscriptions thành dạng biểu đồ
  - _MRR Timeline_: phân tích báo cáo dựa trên thời gian cho thấy MRR và ARR subscriptions thay đổi thế nào trong khoảng thời gian nhất định

## Reporting page elements

- Các trang reports đều có các thành phần sau:
  - **Filter** and **Group By**: click vào search bar, chọn filter và group by theo ý bạn

  - **Views**: ở các trang reports có nhiều views khác nhau: **Graph**, **Pivot**, **List**
    - **Graph** view: có các options _Bar chart_, _Line Chart_, _Pie Chart_
      - _Bar chart_ có dạng _Stacked_, _Descending_, _Ascending_
      - _Line chart_ có dạng _Cummulative_, _Stacked_, _Descending_, _Ascending_

    - **Pivot** view: có các options _Flip axis_ - đổi hàng cột, _Expand all_ - show toàn bộ hàng cột, _Download .xlsx_ - xuất file excel

  - **Measures**: graph và pivot view có dropdown menu **Measures** có các option liên quan tới dữ liệu

  - **Insert in spreadsheet**: chỉ có ở enterpise -> chèn report vào trang spreadsheet của app `Documents`

## Reporting pages

### Subscriptions analysis

- Vào `Subscriptions -> Reporting -> Subscriptions`, cần chú ý các mục sau:
  - **Measure** menu: _Monthly Recurring_, _Quantity_, _Recurring Revenue_, _Untaxed Total_, _Yearly Recurring_, _Count_

### Retention analysis

- Vào `Subscriptions -> Reporting -> Retention` để xem báo cáo về số liệu tỉ lệ giữ chân khách hàng của các subscriptions

- Chú ý 2 dropdown menu **Measures** và **Month**
  - _Measures_ có các options: _Amount to invoice_, _Margin_,_Margin (%)_, _Prepayment percentage_, _Shipping weight_, _Unpaid Amount_, _Count_
  - _Month_ có các options: _Month_, _Day_, _Week_, _Year_

### MRR Breakdown

- Vào `Subscriptions -> Reporting -> MRR Breakdown`

- Mặc định hiển thị ở graph view với _Bar chart_ và _Stacked_ option được chọn, default filter là _Event Date: Month -> Event Type_

- **Measures** gồm các options: _Active Subscriptions Change_, _ARR Change_, _MRR Change_, _Count_

### MRR analysis

- Vào `Subscriptions -> Reporting -> MRR Timeline` hiển thị mặc định ở graph view với _Line chart_ và _Stacked_ option được chọn
  default filter là _Event Date: Month_

- **Measures** dropdown menu: _Active Subscriptions Change_, _ARR Change_, _MRR Change_, _Count_
