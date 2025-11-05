---
sidebar_position: 1
---

# Marketing Automation

Odoo cung cấp app `Marketing Automation` để tạo các các chiến dịch marketing động với các actions tự động diễn ra trong suốt quá trình chiến dịch, ví dụ như gửi một loạt các email theo thời gian
hoặc tương tác với khách hàng tiềm năng dựa trên tương tác của họ với chiến dịch

Nó cũng cung cấp các tính năng nâng cao giúp tự động hóa các tác vụ lặp lại trong toàn bộ cơ sở dữ liệu

Ứng dụng này gồm các mục chính:

- [Audience targeting](./audience-targeting.md): cấu hình mục tiêu khán giả cho một chiến dịch
- [Workflow activities](./campaign-workflow-activities.md): định nghĩa các hoạt động sẽ diễn ra trong chiến dịch
- [Test/running campaigns](./testing-running-campaigns.md): chạy một bản test hoặc chạy cả chiến dịch
- [Campaign metrics](./campaign-metrics.md): xem số liệu của chiến dịch

## Configuration

### Campaigns

Một chiến dịch đề cập tới quy trình làm việc của các hoạt động (activities) được thực thi tự động cho đối tượng mục tiêu (target audience), dựa trên các predefined filters, triggers và thời lượng hoạt động của từng activities

Một campaign mới có thể được tạo từ đầu hoặc từ template

Vào `Marketing Automation` click `New` để bắt đầu tạo Campaign mới từ đầu

Nếu tạo từ campaign templates, Odoo cung cấp một vài templates có sẵn:

- **Tag Hot Contacts**: gửi một email chào mừng tới các contacts và đặt tag cho chúng nếu email được click vào

- **Welcome Flow**: gửi một email chào mừng tới người đăng ký mới, xóa các địa chỉ email bị trả lại

- **Double Opt-in**: gửi một email tới người nhận mới để xác nhận sự bằng lòng của họ

- **Commercial prospection**: gửi một danh mục miễn phí và theo dõi phản ứng của người nhận
- **Schedule Calls**: nếu một lead được tạo từ contact đã tồn tại, lên lịch cuộc gọi tới salesperson của họ

- **Priority Hot Leads**: gửi email đến leads mới và chỉ định mức độ ưu tiên cao cho họ nếu họ mở mail

### Targets and filters

Trong form tạo campaign, **Target** và **Filter** chỉ định các models và các điều kiện lọc để lấy ra danh sách đối tượng mục tiêu cho chiến dịch từ cơ sở dữ liệu

#### Records

Các contacts trong hệ thống fit với điều kiện lọc cho campaign này được hiển thị ở field _records_

#### Participants

Người tham gia là các records có tương tác với campaign

Số lượng người tham gia chạy thử nghiệm được hiển thị ở **Tests** smart button, hiển thị ngay sau khi run tests

### Workflow

_Workflow_ bao gồm các activity được tổ chức một cách tuần tự trong chiến dịch. Campaign workflow được định nghĩa ở phần **Workflow** của campaign form

#### Activities

Là các phương thức liên hệ hoặc hành động của server được tổ chức theo quy trình làm việc được thực thi trong một chiến dịch. Mỗi khi chạy, mỗi activity hiển thị số lượng người tham gia
tương tác dưới dạng số lượng _Success_ và _Reject_

Để tạo các activities, click **Add new activity** trong campaign form dưới **Workflow** section

- **Email**: một email được gửi tới người tham gia chiến dịch
- \*\*Server action: một hành động của server được thực thi
- **SMS**: một text message được gửi tới người tham gia

### Testing and running

Sau khi tạo, chiến dịch có thể được kiểm tra để đảm bảo quy trình làm việc hoạt động như mong đợi, giúp kiểm tra và sửa lỗi trước khi tiếp cận mục tiêu

Sau khi testing, chiến dịch có thể được bắt đầu khởi chạy để thu hút đối tượng mục tiêu.

### Reporting

Các số liệu về thống kê mức độ tương tác, độ hiệu quả của chiến dịch sẽ được trình bày trong menu `Marketing Automation -> Reporting` trong này gồm các chỉ số ở từng menu như:

- **Link Tracker**: hiển thị số liệu tracking của các links trong chiến dịch như số lần clicks
- **Traces**: hiển thị kết quả của tất cả các activities từ tất cả campaigns
- **Participants**: hiển thị tổng quan những người tham gia của tất cả campaigns

Thêm nữa là mỗi activity trong mỗi campaign cũng hiển thị số liệu tương tác
