const Coupon = require("../models/Coupon");

// Create a new coupon
exports.createCoupon = async (req, res) => {
    console.log("Creating Coupon with req body :: " ,req.body );
    const existingCoupon = await Coupon.findById(req.body._id);
    if (existingCoupon) {
      return res.status(400).json({ error: `Coupon with ID ${req.body._id} already exists ::  ${JSON.stringify(existingCoupon._doc)}` });
    }
   try {
       const coupon = new Coupon(req.body);
       await coupon.save();
       res.status(201).json(coupon);
   } catch (err) {
       res.status(400).json({ error: err.message });
   }
};

// Retrieve all coupons
exports.getCoupons = async (req, res) => {
    console.log("Hello");
   try {
       const coupons = await Coupon.find();
       res.json(coupons);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};

// Retrieve a specific coupon
exports.getCouponById = async (req, res) => {
   try {
       const coupon = await Coupon.findById(req.params.id);
       if (!coupon) return res.status(404).json({ error: "Coupon not found" });
       res.json(coupon);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};

// Update a coupon
exports.updateCoupon = async (req, res) => {
   try {
       const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
       });
       if (!coupon) return res.status(404).json({ error: "Coupon not found" });
       res.json(coupon);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};

// Delete a coupon
exports.deleteCoupon = async (req, res) => {
   try {
       const coupon = await Coupon.findByIdAndDelete(req.params.id);
       if (!coupon) return res.status(404).json({ error: "Coupon not found" });
       res.json({ message: "Coupon deleted" });
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};

// Fetch applicable coupons
exports.getApplicableCoupons = async (req, res) => {
   try {
       const { cart } = req.body; // Assume cart contains products and total value
       const coupons = await Coupon.find();

       const applicableCoupons = coupons.filter((coupon) => {
           if (coupon.type === "cart-wise" && cart.total >= coupon.details.minCartValue) {
               return true;
           }

           return false;
       });

       res.json(applicableCoupons);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};

exports.applyCoupon = async (req, res) => {
   try {
       const coupon = await Coupon.findById(req.params.id);
       if (!coupon) 
        return res.status(404).json({ error: "Coupon not found" });

       // Example logic for applying discounts
       const { cart } = req.body;
       if (coupon.type === "cart-wise" && cart.total >= coupon.details.minCartValue) {
        if(coupon.details.discount){
            cart.total -= coupon.details.discount;
        }else if(coupon.details.discountPercent){
            cart.total -= (coupon.details.discountPercent/100)*cart.total; 
        }
       }

       res.json({cart});
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};
