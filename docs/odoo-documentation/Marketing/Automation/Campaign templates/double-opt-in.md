---
sidebar_position: 6
---

# Double Opt-in

Một \*double opt-in\*\* được hiểu như là một sự xác nhận đồng ý tham gia vào campaigns. Ở một vài quốc gia sẽ có luật chống SPAM. Việc xác nhận sự đồng ý tham gia cũng có một số lợi ích với doanh nghiệp
như là: xác thực địa chỉ email, tránh người đăng ký spam, hoặc là robot, giữ cho danh sách người tham gia campaign clean và sẽ chỉ bao gồm các liên hệ có tương tác

## Use the double opt-in campaign template

Mở `Marketing Automation` chọn **Double Opt-in** template từ dashboard cho cho chiến dịch xác nhận lại sự đồng thuận của người tham dự

- Điền các field **Target**, **Filter** để lọc ra danh sách muốn thực hiện chiến dịch này

- Use case thực tế: Website có phần để lại email của khách hàng, đặt tên mailing list là _Newsletter_, sau đó gắn vào trang design của website
  Để thực hiện chiến dịch Double Opt-in này để xác thực lại các địa chỉ email hợp lệ và những khách hàng nào đồng ý tham gia chiến dịch
  thì sau khi chọn template **Double Opt-in** như trên
- Filter và target cụ thể như sau:
  - Target: Mailing Contact
  - Unicity based on : Email (Mailing Contact)
  - Filter:
    - Email is set
    - Blacklist is not set
    - Mailing lists contains _Newsletter_

- **Lưu ý quan trọng**: **Target** model không nên bị thay đổi, việc thay đổi Target model với các activities trong Workflow sẽ không làm mất hiệu lực
  của các activities hiện có trong Workflow

Templates này gồm 2 activities là gửi email _Confirmation_, và action con là _Add to list_
![automation double opt-in](../img/automation_double_optin.png)
