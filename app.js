// Environment & Dependencies
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express App
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// CORS Configuration (Optional: Restrict origins)
app.use(cors());

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Test API Endpoint
app.get("/", (req, res) => {
    res.send("API is running!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}!`));
