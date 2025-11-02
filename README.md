# Sum Calculator React App

ứng dụng React đơn giản để tính tổng hai số, được xây dựng với React và thiết kế theo nguyên tắc component-based.

## Tính năng

- Nhập và tính tổng hai số
- Kiểm tra đầu vào hợp lệ
- Hiển thị thông báo lỗi khi dữ liệu không hợp lệ
- Giao diện người dùng thân thiện
- Responsive design

## Cấu trúc dự án

```
sum-app/
├── public/
│   ├── index.html           # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── NumberInput.jsx    # Component nhập số
│   │   ├── CalculateButton.jsx# Component nút tính toán
│   │   └── SumCalculator.jsx  # Component chính
│   ├── App.jsx            # Component gốc
│   ├── App.css            # Styles
│   └── index.js           # Điểm khởi đầu của chương trình
└── package.json          # Dependencies và scripts
```

## Components

### 1. NumberInput
- Component để nhập số
- Props:
  - `label`: Nhãn của trường nhập
  - `value`: Giá trị hiện tại
  - `onChange`: Handler xử lý thay đổi
  - `placeholder`: Text gợi ý

### 2. CalculateButton
- Component nút tính tổng
- Props:
  - `onClick`: Handler xử lý sự kiện click

### 3. SumCalculator
- Component chính quản lý logic
- Features:
  - Quản lý state của ứng dụng
  - Xử lý validation
  - Tính toán kết quả
  - Hiển thị thông báo lỗi


## Deployment

### Local Development
```bash
# Cài đặt dependencies
npm install

# Chạy ứng dụng ở môi trường development
npm start
```

### Deploy to GitHub Pages
```bash
# Build và deploy lên GitHub Pages
npm run deploy
```

Live Demo: [Sum Calculator App](https://nguyensontung16.github.io/React-calculator)

## Quy trình Deploy

1. Push code lên GitHub repository:
```bash
git add .
git commit -m "Your commit message"
git push origin master
```

2. Deploy lên GitHub Pages:
```bash
npm run deploy
```

3. Truy cập website tại: https://nguyensontung16.github.io/React-calculator



