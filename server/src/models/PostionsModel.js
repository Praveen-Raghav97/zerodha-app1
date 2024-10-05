import { model } from "mongoose";

import { PositionsSchema } from "../schemas/PostionsSchema.js";

const PositionsModel = new model("position", PositionsSchema);

export { PositionsModel };