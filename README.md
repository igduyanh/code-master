# Code Master

Nền tảng luyện tập và học lập trình trực tuyến (Online Code Practice & Learning Platform).

## Tính năng

- **Luyện tập code**: Giải bài tập lập trình với hệ thống chấm tự động qua Piston API
- **Học tập**: Quản lý bài học với tài liệu đính kèm
- **Bảng xếp hạng**: Hệ thống xếp hạng và điểm số
- **Quản trị**: Dashboard quản lý người dùng, bài tập và thống kê
- **Đa ngôn ngữ**: Hỗ trợ nhiều ngôn ngữ lập trình (Python, JavaScript, C++,...)
- **Code Editor**: Tích hợp Monaco Editor (VS Code) trực tiếp trên trình duyệt

## Công nghệ

- **Backend**: Node.js, Express.js v5
- **Database**: SQLite3
- **View Engine**: EJS
- **Code Editor**: Monaco Editor
- **Authentication**: bcrypt + express-session
- **Security**: Helmet.js, CORS
- **Code Execution**: Piston API

## Cài đặt

### Yêu cầu

- Node.js >= 18
- npm >= 9

### Các bước

1. Clone repository:
   ```bash
   git clone https://github.com/igduyanh/code-master.git
   cd code-master
   ```

2. Cài đặt dependencies:
   ```bash
   npm install
   ```

3. Tạo file `.env` từ template:
   ```bash
   cp .env.example .env
   ```

4. Cập nhật `SESSION_SECRET` trong file `.env` bằng một chuỗi ngẫu nhiên mạnh.

5. Khởi động server:
   ```bash
   # Production
   npm start

   # Development (auto-reload)
   npm run dev
   ```

6. Truy cập ứng dụng tại: http://localhost:3000

## Cấu trúc thư mục

```
code-master/
├── app.js                 # Entry point
├── config/
│   └── database.js        # Cấu hình & khởi tạo SQLite
├── controllers/           # Business logic
├── models/                # Data access layer
├── routes/                # Định nghĩa API endpoints
├── middleware/
│   └── auth.js            # Middleware xác thực
├── views/                 # EJS templates
│   └── partials/          # Components tái sử dụng
├── public/                # Static assets (CSS, images)
│   ├── css/
│   ├── images/
│   └── uploads/           # File upload (avatars, lessons)
└── migrations/            # Database migrations
```

## API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/` | Trang chủ |
| POST | `/auth/register` | Đăng ký tài khoản |
| POST | `/auth/login` | Đăng nhập |
| GET | `/auth/logout` | Đăng xuất |
| GET | `/practice` | Danh sách bài tập |
| GET | `/practice/solve/:id` | Code editor & giải bài |
| POST | `/api/solve/submit` | Nộp bài & chấm điểm |
| GET | `/learning` | Danh sách bài học |
| GET | `/dashboard` | Dashboard quản trị |
| GET | `/leaderboard` | Bảng xếp hạng |
| GET | `/profile` | Hồ sơ người dùng |
