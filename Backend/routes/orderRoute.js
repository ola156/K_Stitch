import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/Auth.js";

import {
  placeOrder,
  placeOrderStripe,
  allOrder,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controlers/orderControler.js";

const orderRouter = express.Router();

//admin
orderRouter.post("/list", adminAuth, allOrder);
orderRouter.post("/status", adminAuth, updateStatus);

// user paymtnt
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

orderRouter.post("/userorders", authUser, userOrders);

//verify payment

orderRouter.post("/verifystripe", authUser, verifyStripe);

export default orderRouter;
