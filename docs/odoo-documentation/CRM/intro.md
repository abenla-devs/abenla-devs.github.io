---
sidebar_position: 1
---

# Tổng quan CRM

- Là nơi tổ chức, quản lý pipeline, tự động hóa các sales activities. Trao quyền tương tác cho teams với khách hàng daily.
- Có thể kéo thả các leads giữa các stage tại kanban view, scheduling task, in-app call, gửi email trực tiếp từ chatter.
- Có thể xem activities chưa hoàn thành

## 1. Pipeline

- Mặc định show pipeline của người đang login trong kanban views.
- Hiển thị các opportunities được gán cho bạn. Phân theo stages. Chuyển stage một Opportunity bằng cách kéo - thả trong kanban view.
- Chỉnh sửa được chi tiết của stage bằng cách click vào `` ![`` icon](./img/edit_stage.png).
- Thêm `Automation` action cho stage bằng cách click vào gear icon ![automated](./img/automated_stage.png)
- Sau đó click `New` để tạo mới một `Automated action` ![create automated action](./img/automation_stage_2.png).
- **Lưu ý:** Bản enterprise sẽ có thêm tính năng AI và SendWhatsApp trong Automation action. Đây là demo AI automation action.
  ![AI](./img/automation_stage_3.png)

## 2. Probabilities

- Mỗi stage khác nhau đều có probability khác nhau. Trong đó Won tương ứng với 100%
- Field probability này được Odoo tự động tính. Ta có thể thay đổi chỉ số này thủ công bằng việc nhập vào
- Số của Odoo tính vẫn hiển thị ở gear icon. ![probability](./img/probability.png). Khôi phục lại số của Odoo bằng
  cách click vào gear icon.

## 3. Sale teams

- Sales team là chức năng quản lý sales
- Có **Rule base assignment** để auto gán leads cho salesperson
- Có thể theo dõi báo cáo về hoạt động của sales team

```mermaid
mindmap
  root((Odoo CRM Features & Analysis))
    Acquire & Convert Leads/Opportunities
      Lead Mining
      Lead Enrichment
      Partner Autocomplete (Enrich Contacts)
      Create Opportunities from Web Contact Forms
      Convert Leads into Opportunities
    Assign and Track Leads
      Predictive Lead Scoring
      Rule-Based Assignment
      Resellers
    Pipeline Management & Organization
      Sales Teams
      Leads & Opportunities Lifecycle
      Lost Leads/Opportunities
      Merging Similar Leads/Opportunities
      Create and Send Quotations
      Mark Opportunity Won/Lost
      Activities
    Analyze Performance (Reporting)
      Pipeline Analysis (CRM > Reporting > Pipeline)
      Expected Revenue Report
      Forecast Report (CRM > Reporting > Forecast)
      Unattended Leads Report
      Quality Leads Report
      Lead Distribution Report
      Marketing Attribution Reports (CRM > Reporting > Leads)
    CRM Gamification
      Motivates users through challenges, goals, and rewards
      Requires 'CRM Gamification' App installation
      Access via Settings > Gamification tools (Debug mode required)
      Create Badges (Rewards)
      Create Challenges
```
