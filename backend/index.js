import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173/";

app.use(
  cors({
    origin: CLIENT_URL,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("Server is running!");
});

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port  http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
