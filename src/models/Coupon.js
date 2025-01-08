const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
   type: {
       type: String,
       enum: ["cart-wise", "product-wise", "BxGy"],
       required: true,
   },
   details: {
       type: Object,
       required: true,
   },
   conditions: {
       type: Object,
       default: {},
   },
   expirationDate: {
       type: Date,
   },
   repetitionLimit: {
       type: Number,
       default: 0,
   },
   createdAt: {
       type: Date,
       default: Date.now,
   },
   updatedAt: {
       type: Date,
       default: Date.now,
   },
});

module.exports = mongoose.model("Coupon", couponSchema);