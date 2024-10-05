import express from "express";
import { getAllPositions } from "../controllers/positions.js";

const positionsRouter = express.Router();

positionsRouter.get('/', getAllPositions);

export default positionsRouter