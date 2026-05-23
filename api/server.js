import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist/public
const staticPath = path.resolve(__dirname, "..", "dist", "public");
app.use(express.static(staticPath));

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Fallback to index.html for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
