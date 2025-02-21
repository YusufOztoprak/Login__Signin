const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


app.use(express.json()); // JSON verilerini işlemek için middleware
app.get("/", (req, res) => {
    res.send("API Çalışıyor!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Sunucu ${PORT} portunda çalışıyor!`));