const express = require("express");
const {
   createCoupon,
   getCoupons,
   getCouponById,
   updateCoupon,
   deleteCoupon,
   applyCoupon,
   getApplicableCoupons
} = require("../controllers/coupons");
const router = express.Router();

router.post("/create", createCoupon);
router.get("/", getCoupons);
router.get("/:id", getCouponById);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);
router.post("/applicable-coupons", getApplicableCoupons);
router.post("/apply-coupon/:id", applyCoupon);

module.exports = router;
