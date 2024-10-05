import express from "express";
import { getAllHoldings } from "../controllers/holding.js";

const holdingsRouter = express.Router();

holdingsRouter.get('/', getAllHoldings);

export default holdingsRouter