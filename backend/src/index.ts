import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import assessments from "./routes/assessments";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/assessments", assessments);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
