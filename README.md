Coupon Management API

A RESTful API to manage and apply different types of discount coupons for an e-commerce platform. This system supports various coupon types and is designed to be easily extendable for future coupon implementations.

Table of Contents

Tech Stack
- Setup Instructions
- API Endpoints
- Coupon Types
- Implemented Scenarios
- Unimplemented Cases
- Limitations
- Future Enhancements

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (via Mongoose)
- Tools: Postman (API testing), cURL (API testing)

Setup Instructions
1.Clone the Repository:
    git clone <repository-url>
    cd coupon-management-api

2.Install Dependencies:
    npm install

3.Environment Variables:
    Create a .env file and add:
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/monk-ecomm-coupons-task

4.Run the Server:
    npm start

API Endpoints:

Coupon Management
    - POST /api/coupons → Create a new coupon
    - GET /api/coupons → Retrieve all coupons
    - GET /api/coupons/:id → Retrieve a specific coupon by ID
    - PUT /api/coupons/:id → Update a specific coupon by ID
    - DELETE /api/coupons/:id → Delete a coupon by ID

Coupon Application
    - POST /api/applicable-coupons → Fetch applicable coupons for a given cart
    - POST /api/apply-coupon/:id → Apply a specific coupon to the cart

Coupon Types
1.Cart-wise Coupons:
    - Apply a discount if the cart value exceeds a threshold.
    - Example: Get $100 off on purchases over $1000.

2.Product-wise Coupons:
    - Apply discounts to specific products.
    - Example: Get 10% off on Product X.

3.Buy X Get Y (BxGy) Coupons:
    - Buy a certain number of products and get others for free.
    - Example: Buy 3 of Product A, get 1 of Product B free.


Implemented Scenarios
    - Coupon Creation with Unique ID:
      Custom IDs must be unique. If a duplicate ID is used, an error is thrown.
    - Applying Cart-wise Coupons:
      Discounts are applied when the cart total exceeds the minimum value set in the coupon.
    - Applying Product-wise Coupons:
      Discounts apply only to eligible products in the cart.
    - Buy X Get Y (BxGy):
      Free products are added to the cart when the required quantity is met.
    - Error Handling:
      Invalid coupon IDs and unmet conditions trigger appropriate error responses.

Unimplemented Cases
    - Coupon Stacking: Applying multiple coupons simultaneously.
    - User-Specific Coupons: Coupons valid only for specific users or user groups.
    - Coupon Usage Limits: Tracking how many times a coupon has been used globally or per user.

Limitations
    - No Authentication: User authentication and role-based access are not implemented.
    - No Expiry Check: Expiration dates are stored but not validated during application.
    - No Dynamic Rule Engine: Conditions for coupons are predefined and not configurable at     runtime.


Future Enhancements
1.Expiration Validation:
    Implement automatic validation of coupon expiration dates.
2.User-Specific and Role-Based Coupons:
    Add user authentication and link coupons to user roles.
3.Coupon Stacking:
    Allow combining multiple coupons with conflict resolution rules.
4.Usage Tracking:
    Add tracking for how many times a coupon has been used globally or by a user.
5.Dynamic Rule Engine:
    Implement a flexible engine to define coupon rules without code changes.
6.Admin Dashboard:
    UI for managing coupons, viewing analytics, and monitoring usage.
7.Notifications:
    Notify users when coupons are about to expire.
8.Caching:
    Implement Redis or similar caching mechanisms for faster coupon retrieval.