import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
