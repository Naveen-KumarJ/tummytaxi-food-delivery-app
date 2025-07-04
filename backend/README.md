# 🍽️ TummyTaxi Backend – API Server

This is the backend API server for the **TummyTaxi** food delivery application. It handles user authentication, food item management, cart operations, order placements, and payment verification using Razorpay.

> 🌐 **Live Backend URL**: `https://tummytaxi-food-delivery-backend.onrender.com`

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.1
- **Database**: MongoDB
- **Authentication**: JWT + Bcrypt
- **File Upload**: Multer
- **Payment Integration**: Razorpay
- **Validation**: Validator.js
- **Environment Config**: dotenv
- **Security**: CORS
- **Dev Tools**: Nodemon

---

## 📁 Project Structure

```

backend/
├── config/           # Database config
│   └── db.js
├── controllers/      # Logic for API endpoints
├── middlewares/      # Auth, image upload
├── models/           # Mongoose schemas
├── routes/           # API route definitions
├── uploads/          # Image storage (via multer)
├── .env              # Environment config
├── server.js         # App entry point
└── README.md         # You're here 📍

````

---

## 🔧 Setup Instructions

### 1. Clone & Install

```bash
cd backend
npm install
````

### 2. Configure Environment

Create a `.env` file:

```env
PORT=8080
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### 3. Start Server

```bash
npm run dev   # For development (nodemon)
# or
npm start     # For production
```

---

## 📦 API Endpoints

All routes are prefixed with `/api/v1`

### 🔐 **User Authentication**

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/user/register` | Register a new user     |
| POST   | `/user/login`    | Login and get JWT token |

---

### 🍔 **Food Management**

| Method | Endpoint           | Description                        |
| ------ | ------------------ | ---------------------------------- |
| POST   | `/food/add`        | Add a new food item *(with image)* |
| GET    | `/food/list`       | Get all food items                 |
| POST   | `/food/remove`     | Remove a specific item             |
| DELETE | `/food/delete-all` | Remove all food items              |

---

### 🛒 **Cart**

> Requires `Authorization: Bearer <token>`

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| POST   | `/cart/add`         | Add item to cart           |
| POST   | `/cart/remove`      | Remove 1 quantity of item  |
| POST   | `/cart/remove-item` | Remove the item completely |
| POST   | `/cart/clear`       | Clear all items from cart  |
| GET    | `/cart/get`         | Get current cart items     |

---

### 📦 **Orders**

> Requires `Authorization: Bearer <token>` for user-specific endpoints

| Method | Endpoint               | Description                          |
| ------ | ---------------------- | ------------------------------------ |
| POST   | `/order/place`         | Place a new order                    |
| POST   | `/order/verify`        | Verify Razorpay payment & save order |
| GET    | `/order/my-orders`     | Get user's own order history         |
| GET    | `/order/all-orders`    | Admin: View all orders               |
| PUT    | `/order/update-status` | Admin: Update order delivery status  |

---

### 📂 Image Uploads

* Images are uploaded via `multer` and stored in the `/uploads` directory.
* Access uploaded images using `/images/<filename>`

---

## 🛡️ Middlewares

* `auth.js`: Verifies JWT token and attaches user to request.
* `imageUpload.js`: Handles `multipart/form-data` for image uploads via `multer`.

---

## 💳 Payment Flow

* Order placed and payment processed via Razorpay.
* `/order/verify` endpoint verifies the payment and stores the order.

---

## 🔒 Protected Routes

Any cart or order route marked with JWT middleware requires a valid token in the request header:

```
Authorization: Bearer <your_token>
```

---

## 🤝 Contribution

Pull requests and issues are welcome. Let’s improve TummyTaxi together!

---

## 🙌 Author

Built with ❤️ by [Naveen Kumar J](https://github.com/Naveen-KumarJ)
