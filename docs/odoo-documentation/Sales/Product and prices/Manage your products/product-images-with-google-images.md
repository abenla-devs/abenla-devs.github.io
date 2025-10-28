---
sidebar_position: 14
---

# Product images with Google Images

- Có hình ảnh phù hợp với sản phẩm sẽ rất hữu ích, tuy nhiên việc gán nhiều hình ảnh sẽ tốn khá nhiều thời gian.

- May thay, bằng việc dùng _Google Custom Search API_ với Odoo database, việc tìm kiếm hình ảnh cho products sẽ cực kì hiệu quả.

## Configuration

### Google API dashboard

1. Vào [Google Cloud Platform API & Services](https://console.cloud.google.com/apis/dashboard) để tạo Google Custom Search API Credentials
   Tiếp theo, đồng ý với **Term of Service** của họ và click **Agree and Continue**

2. Từ đây, chọn (hoặc tạo) một API Project để lưu credentials. Bắt đầu bằng việc đặt **Project Name**, chọn **Location**, sau đó **Create**

3. Với **Credentials** options, click **Create Credentials** chọn **API Key** từ dropdown menu

4. Copy **Your API Key**, sau đó **Close**

5. Ở trang này, gõ _Custom Search API_ và chọn nó, sau đó click **Enable**

### Google Programmable Search dashboard

1. Kế tiếp, vào [Google Programmable Search Engine](https://programmablesearchengine.google.com/about/)

2. Tạo **Create a new search engine**, điền các thông tin cần thiết, enable các fields **Image Search** và **SafeSearch**

3. Validate form bằng click **Create**

4. Hiển thị ra trang với heading: **Your new search engine has been created**

5. Click **Customize** để mở **Overview -> Basic**, copy ID trong **Search Engine ID** field.

### Odoo

1. Vào `Settings` kéo xuống **Integrations** check box **Google Images**, sau đó **Save**

2. Enter **API Key** và **Search Engine ID** ở trên.

3. **Save**

## Product images in Odoo with Google Custom Search API

- Việc thêm hình ảnh vào products hay bất kỳ product variants nào có thể được thực hiện ở bất cứ app Odoo nào được quyền truy cập vào các trang sản phẩm, ví dụ: `Sales`, `Inventory`,..

1. Vào **Products** page trong `Sales` app, hoặc vào **Product Variants** trong `Sales` app
2. Chọn product/variant mong muốn
3. Click vào **Actions** button, chọn \*\*Get Pictures from Google Images
4. Popup menu hiện ra, chọn **Get Pictures**
5. Chọn ảnh

- **Chú ý**: chỉ 10 ảnh đầu tiên được load ngay lập tức
