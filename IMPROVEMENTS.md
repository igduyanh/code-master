# Code Master - Task List Cải Thiện Project

## ✅ Đã hoàn thành

### Bug Fixes
- [x] Sửa lỗi typo `relsove` → `resolve` trong `models/dashboardModel.js`
- [x] Xóa text debug `bbbb` trong message đăng ký ở `controllers/authController.js`
- [x] Xóa các `console.log` debug trong `models/dashboardModel.js`
- [x] Xóa các `console.log` debug trong `models/practice-detailsModel.js`
- [x] Xóa comment thừa `//aa` cuối file `models/dashboardModel.js`

### Security
- [x] Thêm `dotenv` để quản lý biến môi trường (session secret, port)
- [x] Thêm `helmet.js` để bảo vệ HTTP headers
- [x] Tạo file `.env.example` làm template cấu hình
- [x] Di chuyển hardcoded session secret sang biến môi trường

### Code Quality
- [x] Xóa dependency `bcryptjs` không sử dụng
- [x] Xóa dependency `mysql2` không sử dụng
- [x] Di chuyển `nodemon` sang `devDependencies`
- [x] Thêm script `npm run dev` cho development
- [x] Đổi tên package từ `my-ejs-app` thành `code-master`
- [x] Thêm `database.sqlite` và `codemaster.db` vào `.gitignore`

### Documentation
- [x] Viết lại `README.md` với hướng dẫn cài đặt, cấu trúc thư mục, API endpoints

---

## 🔲 Cần làm tiếp

### 🔴 Ưu tiên cao - Security

- [ ] **Input Validation**: Thêm thư viện validate (joi/yup/zod) cho tất cả req.body
  - File cần sửa: `routes/authRoute.js`, `controllers/solveController.js`, `controllers/addpracticeController.js`
  - Validate email format, password strength, string length limits
- [ ] **CSRF Protection**: Thêm `csurf` middleware để chống Cross-Site Request Forgery
  - File cần sửa: `app.js`, tất cả views có form
- [ ] **Rate Limiting**: Thêm `express-rate-limit` cho login/register endpoints
  - File cần sửa: `app.js`, `routes/authRoute.js`
- [ ] **XSS Protection**: Đảm bảo escape HTML output trong tất cả EJS templates
  - Kiểm tra tất cả file trong `views/` sử dụng `<%= %>` (escaped) thay vì `<%- %>` (unescaped)
- [ ] **Password Strength**: Thêm yêu cầu độ mạnh mật khẩu khi đăng ký
  - File: `routes/authRoute.js`
- [ ] **Session Store**: Thay `session-file-store` bằng production-ready store (Redis/connect-sqlite3)
  - File: `app.js`

### 🟠 Ưu tiên cao - Error Handling & Logging

- [ ] **Structured Logging**: Thay thế `console.log`/`console.error` bằng winston hoặc pino
  - File cần sửa: `config/database.js`, `migrations/addColumnsToKetQuaBaiNop.js`, tất cả controllers
- [ ] **Global Error Handler**: Thêm middleware xử lý lỗi tập trung
  - File: `app.js` - thêm `app.use((err, req, res, next) => {...})` cuối cùng
- [ ] **404 Handler**: Thêm trang 404 cho routes không tồn tại
  - File: `app.js`, tạo `views/404.ejs`
- [ ] **Error Response Consistency**: Thống nhất format error response (JSON vs redirect)
  - Kiểm tra tất cả controllers

### 🟠 Ưu tiên cao - Testing

- [ ] **Setup Test Framework**: Thêm Jest hoặc Mocha + Chai
  - Tạo `jest.config.js`, thêm script `"test": "jest"` vào `package.json`
- [ ] **Unit Tests cho Models**: Test tất cả database queries
  - Tạo `tests/models/userModel.test.js`
  - Tạo `tests/models/dashboardModel.test.js`
  - Tạo `tests/models/practiceModel.test.js`
- [ ] **Unit Tests cho Controllers**: Test business logic
  - Tạo `tests/controllers/authController.test.js`
  - Tạo `tests/controllers/solveController.test.js`
- [ ] **Integration Tests**: Test API endpoints
  - Tạo `tests/routes/auth.test.js`
  - Tạo `tests/routes/practice.test.js`
- [ ] **Test Coverage**: Thêm cấu hình coverage report, target >= 80%

### 🟡 Ưu tiên trung bình - Code Quality

- [ ] **ESLint**: Thêm ESLint với config phù hợp (eslint:recommended)
  - Tạo `.eslintrc.json`, thêm script `"lint": "eslint ."` vào `package.json`
- [ ] **Prettier**: Thêm Prettier để thống nhất code style
  - Tạo `.prettierrc`
- [ ] **Pre-commit Hooks**: Thêm husky + lint-staged
- [ ] **JSDoc Comments**: Thêm documentation cho tất cả functions/methods
  - Ưu tiên: `config/database.js`, `models/*.js`, `controllers/*.js`
- [ ] **Refactor app.js**: Tách route declarations và middleware configuration ra files riêng
  - File hiện tại import routes không theo thứ tự, có code sau `app.listen()`
- [ ] **Remove Dead Code**: Kiểm tra và xóa code/imports không sử dụng
- [ ] **Consistent Naming**: Chuẩn hóa tên file (vd: `solve.js` → `solveModel.js`)

### 🟡 Ưu tiên trung bình - Database

- [ ] **Migration System**: Thêm migration tool (knex/umzug) thay vì chạy migration thủ công
- [ ] **Seed Data**: Tạo script seed database với dữ liệu mẫu
- [ ] **Connection Pooling**: Cấu hình connection pool cho SQLite
- [ ] **Error Callbacks**: Thêm error handling cho tất cả `db.run()` trong `initDatabase()`
  - File: `config/database.js`

### 🟡 Ưu tiên trung bình - Features

- [ ] **Forgot Password**: Chức năng quên mật khẩu qua email
- [ ] **Email Verification**: Xác thực email khi đăng ký
- [ ] **Role-based Access Control**: Middleware phân quyền Admin/User chi tiết hơn
  - File: `middleware/auth.js` - thêm `isAdmin` middleware
- [ ] **Pagination**: Thêm phân trang cho danh sách bài tập, bảng xếp hạng
- [ ] **Search & Filter**: Cải thiện tìm kiếm bài tập theo chủ đề, độ khó

### 🔵 Ưu tiên thấp - DevOps & Infrastructure

- [ ] **CI/CD Pipeline**: Tạo GitHub Actions workflow
  - Tạo `.github/workflows/ci.yml` với lint, test, build
- [ ] **Docker**: Tạo Dockerfile và docker-compose.yml
- [ ] **Environment Configs**: Tạo cấu hình cho dev/staging/production
- [ ] **Health Check Endpoint**: Thêm `/health` endpoint để monitoring
- [ ] **API Documentation**: Tạo Swagger/OpenAPI docs

### 🔵 Ưu tiên thấp - Performance & UX

- [ ] **Caching**: Thêm caching layer cho static data (Redis hoặc in-memory)
- [ ] **Compression**: Thêm `compression` middleware cho response
- [ ] **Static Asset Optimization**: Minify CSS, thêm cache headers
- [ ] **Dark/Light Theme**: Thêm toggle giao diện sáng/tối
- [ ] **i18n**: Hỗ trợ đa ngôn ngữ (Tiếng Việt / English)
- [ ] **Mobile Responsive**: Cải thiện UI trên thiết bị di động
