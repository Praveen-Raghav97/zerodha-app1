import { model } from "mongoose";

import { HoldingsSchema } from "../schemas/holdings.schema.js";
const HoldingsModel = new model("holding", HoldingsSchema);

export { HoldingsModel };