---
sidebar_position: 1
---

# Tổng quan Sales

- Bản giá/Báo giá là một tài liệu gửi đến khách hàng, trong đó chứa thông tin về chi phí, điều khoản ước tính cho hàng hóa hoặc dịch vụ.
  Báo giá được chuyển thành đơn đặt hàng (sale orders) là thỏa thuận cuối cùng trước khi giao hàng và lập hóa đơn (invoice).

## Tổng quan về Sale flow.

- Flow điển hình thường theo các steps sau:
  1. Báo giá: Một bản đề xuất được gửi tới khách hàng kèm thông tin chi tiết về sản phẩm và giá cả.
  2. Sale order: Đơn đặt hàng được tạo tự động khi khách hàng chấp nhận bảng báo giá và xác nhận bán hàng.
  3. Giao hàng: Sản phẩm được vận chuyển hoặc dịch vụ được giao tới khách hàng.
  4. Hóa đơn: Hóa đơn cuối cùng đucợ xuất dựa trên hóa đơn bán hàng hoặc sản phẩm/dịch vụ được giao.
  5. Thanh toán: Khách hàng thanh toán hóa đơn, hoàn tất chu trình bán hàng.

- Quotation được config trong Sales app. Chúng có thể được sinh ra từ các apps khác như 1 phần của sale workflow.
  - `CRM`: chuyển đổi opportunities thành báo giá để theo dõi các giao dịch tiềm năng.
  - `Helpdesk`: Sinh ra báo giá từ ticket khi cung cấp dịch vụ/sản phẩm có trả phí.
  - `Subscriptions`: Cung cấp dịch vụ định kỳ khi bắt đầu chu trình thanh toán tự động.

## Sale quotations trong giao dịch kinh doanh

- Sales quotation phục vụ như một bước quan trọng trong tiến trình sales. Kết nối khoảng cách giữa việc thăm dò về hàng hóa và dịch vụ
  của khách hàng với hợp đồng thanh toán và giao hàng sau cùng. Quotation còn cung cấp một sự minh bạch về giá, giúp hai bên đàm phán
  và dễ dàng hoàn thiện các điều khoản trước khi đưa ra cam kết.

## Các thành phần chính của một sales quotation

- Một sales quotation sẽ gồm có các thành phần như sau:
  - _Quotation number and date_: Một định danh duy nhất cho việc tracking và referencing (tham chiếu), cũng như ngày phát hành và ngày hết hạn.
    Trong Odoo, quotation number được gán dưới một quy ước đặt tên tiêu chuẩn sau khi được xác nhận.
  - _Customer information_: Tên và thông tin liên hệ của khách hàng, cũng như hóa đơn và địa chỉ giao hàng.
  - _Products and services_: Danh sách chi tiết các mặt hàng cần mua, bao gồm số lượng, thông số kỹ thuật (nếu cần) và đơn giá.
  - _Payment terms and pricelists_: Các thỏa thuận và quy tắc được cấu hình để định giá và thanh toán cho báo giá bán hàng cụ thể.
  - _Special pricing_: Tùy chọn giảm giá và giá khuyến mại để cập nhật/sửa đổi từng dòng sản phẩm.
  - _Total cost and currency_: Tổng giá sản phẩm hoặc dịch vụ và giá vận chuyển, bao gồm các loại thuế liên quan.
  - **Lưu ý: bản enterprise và community sẽ khác nhau một chút trong giao diện quotation**
    ![sale quotation community](./img/sales_quotation_com.png)

    ![sale quotaion enterprise](./img/sales_quotation.png)

# Sơ đồ mindmap của module

```markmap
map initialExpandLevel=2
- Sales
  - Point of Sale (POS)
    - Core Functionalities
      - Start/Close Session
      - Sell Products (Qty, Price, Disc)
      - Set Customers (Loyalty, Invoicing)
      - Customer Notes
      - Manage Cash Register (In/Out)
      - Return and Refunds
      - Analytics/Reporting
    - Configuration
      - Access POS Settings (Admin Only)
      - Product Availability (Tick Point of Sale)
      - PoS Product Categories
        - Create New Category
        - Assign to Products
      - Payment Methods
        - Cash
        - Bank
        - E-Wallet
      - POS Users and Roles
        - Cashier
        - Manager Approval Features
      - Hardware Setup
        - Receipt Printer
        - Barcode Scanner
        - Cash Drawer
        - IoT Box (Enterprise)
    - Advanced Features (Enterprise Only)
      - Loyalty Program
      - Gift Cards & Vouchers
      - Franchise / Multi-Branch Management
      - Kitchen Display System (KDS)
      - Self-Ordering Kiosk
  - Inventory & Warehousing
    - Realtime Stock Sync with POS
    - Lot/Serial Tracking
    - Expiry Management
    - Multi-Warehouse Routing
    - Delivery Order Automation
  - Sales & CRM
    - Sales Orders from POS
    - Upsell & Cross Sell Suggestions
    - CRM Lead and Opportunity Sync
  - Finance & Accounting
    - Daily Sales Summary Report
    - Cash Control / Bank Deposits
    - Invoicing Integration
    - Payment Reconciliation
  - E-Commerce Integration
    - Unified Product Catalog
    - Web Orders Sync to Warehouse
    - Omni-Channel Pricing Policies
  - Connectors
    - Shopee Connector
      - Sync Confirmed Orders (Shopee → Odoo)
      - Sync Inventory (Odoo → Shopee FBM)
      - Product Catalog Mapping (SKU/Int.Ref)
      - Auto/Forced Order Sync Jobs
      - FBM Delivery Label Fetch
      - Batch Deposit Reconciliation
    - Gelato (Print on Demand)
      - Automated Order Fulfillment
      - API Keys + Webhook Configuration
      - Product Sync (Template ID Mapping)
      - Order Placement (Single Vendor Limit)

```
