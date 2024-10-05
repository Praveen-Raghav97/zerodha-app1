import { model } from "mongoose";

import { OrdersSchema } from "../schemas/OrderSchema.js";

const OrdersModel = new model("order", OrdersSchema);

export{ OrdersModel };