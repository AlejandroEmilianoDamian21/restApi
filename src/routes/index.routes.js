import { Router } from "express";
import { pool } from "../db.js";
import {Router} from 'express'
import { ping } from '../controllers/index.controller.js';

const router = Router();

router.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
});

export default router;
router.get('/ping', ping)

