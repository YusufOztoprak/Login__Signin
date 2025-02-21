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

app.use(express.json()); // Middleware to handle JSON data
app.get("/", (req, res) => {
    res.send("API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}!`));
