# Hướng dẫn viết Markdown & tích hợp Markmap (Docusaurus)

Tài liệu này chỉ để lưu trên GitHub (không render vào site). Dùng để hướng dẫn cách viết Markdown và chèn sơ đồ tư duy (mindmap) bằng Markmap.

## 1) Markdown cơ bản

- Tiêu đề: `#` → `######`
- Đậm/Nghiêng: `**đậm**`, `*nghiêng*`
- Danh sách: `-` hoặc `1.`
- Code inline: \`code\`
- Code block:

```ts
function hello() {
  console.log("Hello");
}
```

- Ảnh: đặt vào `static/img` và tham chiếu:

```md
![mô tả](/img/your-image.png)
```

## 2) Chèn mindmap với Markmap

Dùng code fence `markmap`:

```markmap
- Chủ đề chính
  - Nhánh A
    - A1
  - Nhánh B
```

### Meta (tùy chọn)

Thêm ngay sau `markmap` theo dạng `key=value` (cách nhau bằng khoảng trắng):

- `initialExpandLevel` (số): tầng mở mặc định. `1` = chỉ mở root, `2` = mở 2 tầng đầu, ...
- `height` (số px hoặc chuỗi có đơn vị như `480px`, `60vh`)

Ví dụ:

```markmap initialExpandLevel=2 height=480
- Root
  - A
    - A1
  - B
```

Ví dụ mở 1 tầng:

```markmap initialExpandLevel=1
- Tài liệu
  - Giới thiệu
  - Hướng dẫn
```

## 3) Dùng trực tiếp trong MDX

```mdx
<MarkmapComponent
  content={`- Root\n  - A\n  - B`}
  initialExpandLevel={2}
  height={480}
/>
```

Ghi chú: `MarkmapComponent` đã đăng ký toàn cục qua `src/theme/MDXComponents.ts`.

## 4) Khắc phục sự cố

- Sau khi đổi cấu hình/plugin, chạy:

```bash
npm run clear && npm start
```

- Ảnh méo: kiểm tra đường dẫn hoặc CSS. Dự án đã đặt rule `height: auto` cho ảnh trong `.markdown img`.

## Tham khảo

- Markmap: https://github.com/markmap/markmap

## Lưu ý

- Quy trình lấy mindmap từ `NotebookLLM`:
  1. Cài [NotebookLLM Mindmap Extractor](https://chromewebstore.google.com/detail/notebooklm-mindmap-extrac/ecikohbjgbjnlbldbjnceohmbhipipcp?authuser=0&hl=en-GB)
  2. Mở `NotebookLLM` chọn `Mind Map` từ tab `Studio`, click `Expand all nodes`
  3. Mở NotebookLLM Mindmap Extractor, click **Detect Mindmap**, chọn **Export Format** (nên chọn opml), click **Export Mindmap** để lấy file về
  4. Vào chatgpt hoặc gemini,.. tải file vừa export kèm promt _Using this OPML file, I need you to convert the structure into Markdown with `markmap` code fences so that it can be compiled with Markmap._
  5. Copy kết quả vào file markdown dưới code fences markmap
