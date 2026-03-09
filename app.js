require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const helmet = require("helmet");
const session = require("express-session");
const FileStore = require('session-file-store')(session);
const database = require("./config/database");
const topicRoutes = require("./routes/topicRoutes");
const practiceRoutes = require("./routes/practiceRoute");
const topicDetailRouter = require("./routes/topic-detailRoute");
const leaderboardRoute = require("./routes/leaderboardRoute");
const solveRoutes = require("./routes/solveRoutes");
const blogRouter = require("./routes/blogRoute");
const aboutRouter = require("./routes/aboutRoute");

const dashboardRouter = require("./routes/dashboardRoute");

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "codemaster-secret-key",
    resave: false,
    saveUninitialized: true,
    store: new FileStore({
      path: './sessions',
      ttl: 86400,
      retries: 0
    }),
    cookie: { secure: false },
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRoute = require("./routes/indexRoute");
const authRoute = require("./routes/authRoute");
const profileRouter = require("./routes/profileRoute");
const settingsRouter = require("./routes/settingsRoute");
const practiceRouter = require("./routes/practiceRoute");
const addpracticeRouter = require("./routes/addpracticeRoute");

app.use("/", dashboardRouter);
app.use("/", addpracticeRouter);
app.use("/practice", practiceRoutes);
app.use("/profile", profileRouter);
app.use("/settings", settingsRouter);
app.use(topicRoutes);
app.use("/", topicDetailRouter);
app.use("/", solveRoutes); // Thay đổi thành
app.use("/practice", solveRoutes);

app.use("/leaderboard", leaderboardRoute);
app.use("/", indexRoute);
app.use("/auth", authRoute);
app.use("/blog", blogRouter);

const PORT = process.env.PORT || 3000;

// Thêm route xử lý đăng xuất
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(
    `🚀 Server đang chạy tại: \x1b[34mhttp://localhost:${PORT}\x1b[0m`
  );
});
app.use("/about", aboutRouter);

// Thêm vào phần khai báo routes
const learningRouter = require('./routes/learningRoute');

// Thêm vào phần sử dụng routes
app.use('/learning', learningRouter);
