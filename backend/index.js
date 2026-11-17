import express from "express";
import cors from "cors";
import { db } from "./db/config.js";
import { mainRouter } from "./src/api/routes.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173/";

// Middleware
app.use(
  cors({
    origin: CLIENT_URL,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", mainRouter);
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    // Test database connection
    const connection = await db.getConnection();

    console.log("Database connection established successfully.");
    connection.release();

    app.listen(PORT, (err) => {
      if (err) {
        console.error("Failed to start the server:", err.message);
        process.exit(1);
      }
      console.log(`Server running on port http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error(
      "Failed to connect to the database. Server not started.",
      error.message,
    );
    process.exit(1);
  }
};

startServer();
