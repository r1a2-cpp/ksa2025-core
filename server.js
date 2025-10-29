import express from "express";
import {connectDB} from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
connectDB();

app.get('/db',(req,res)=>{
  res.send("server running with mongodb connected");
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!", timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
