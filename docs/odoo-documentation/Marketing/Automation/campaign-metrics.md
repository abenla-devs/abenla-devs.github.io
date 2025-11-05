---
sidebar_position: 5
---

# Campaigns metrics

_Campaign metrics_ là số liệu thống kê và phân tích chi tiết một chiến dịch tiếp thị, đo lường sự thành công và hiệu quả của chiến dịch đó.

## Activity analytics

Trong campaign form, dưới phần **Workflow**, mỗi activities đều có thống kê như _Success_, _Rejected_, _Sent_, _Clicked_, _Replied_, _Bounced_
Số liệu trong mỗi activity gần như là real-time

Bên trái mỗi activity là thời gian mà activity này đã được trigger
![automation activity metrics](./img/automation_activity_metrics.png)

## Activity graph

Mỗi khối activity, một **Graph** tab được mở mặc định hiển thị số liệu thống kê ở trên đồ thị, số liệu thành công biểu thị ở **SUCCESS** màu xanh, và số liệu bị từ chối ở **REJECTED** màu đỏ

Bên dưới đồ thị là các số liệu của các Email/SMS activity types
![automation activity graph](./img/automation_activity_graph.png)

## Activity filter

Kế bên tab **Graph** là **Filter**, click vào đây sẽ hiển thị các filter của activity này và bao nhiêu records thỏa điều kiện
![automation activity filter](./img/automation_activity_filter.png)

## Link tracker

Trong `Marketing Automation -> Reporting -> Link Tracker` hiển thị số liệu thống kê về link tracker của campaigns

## Traces

Odoo theo dõi toàn bộ các activity của các campaigns ở báo cáo này, có thể tùy chọn các thông số **Measure**, có thể xuất các báo cáo tương ứng

## Participants

Odoo tracking tất cả người tham dự theo mỗi campaign. Có thể tùy chỉnh để có báo cáo mong muốn
