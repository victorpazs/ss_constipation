import express from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { answers, rules } = req.body;

    const record = await prisma.assessment.create({
      data: {
        answers,
        rules,
      },
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "Failed to save assessment." });
  }
});

export default router;
