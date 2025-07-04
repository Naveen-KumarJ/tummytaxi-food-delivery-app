# 🛵 TummyTaxi – Full Stack Food Delivery Application

**TummyTaxi** is a full-stack food delivery web application that allows users to browse menus, place orders, and track their deliveries. It includes an admin panel for managing items and orders, a user-friendly frontend interface, and a robust backend with API integration.

---

## 🚀 Tech Stack

This full-stack application is built using modern web technologies, optimized for scalability, responsiveness, and maintainability.

### 🖥️ Frontend (User)

- **Framework**: React 19 with Vite 7
- **Routing**: React Router DOM v7.6
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Utilities**: Axios, Moment.js
- **Linting & Dev Tools**: ESLint, TypeScript types, Vite Preview

### 🎛️ Admin Panel (Restaurant Dashboard)

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7.6
- **State/API**: Axios, FormData
- **Notifications**: React Toastify
- **Icons**: React Icons
- **Code Quality**: ESLint, React Refresh plugin

### 🧠 Backend (API Server)

- **Runtime**: Node.js
- **Framework**: Express v5.1
- **Database**: MongoDB Atlas with Mongoose v8
- **Authentication**: JWT-based Auth with Bcrypt
- **File Uploads**: Multer
- **Payment Integration**: Razorpay
- **Validation**: Validator.js
- **Environment Management**: Dotenv
- **CORS & Parsing**: cors, body-parser
- **Dev Tools**: Nodemon

---

All modules are kept modular, version-pinned, and follow the latest best practices. Each module (`admin`, `frontend`, `backend`) contains its own detailed setup instructions in their respective `README.md` files.

---

## 🗂 Project Structure

```

tummytaxi/
├── admin/       # Admin Panel (Restaurant/Owner Interface)
├── backend/     # Node.js + Express API server
├── frontend/    # User Interface (React app)
└── README.md    # Project overview (this file)

````

Each folder contains its own `README.md` with setup and usage instructions.

---

## 📦 How to Run the Project

> 💡 Make sure you have **Node.js**, **npm**, and **MongoDB** (or Atlas URI) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tummytaxi.git
cd tummytaxi
````

### 2. Start Backend

```bash
cd backend
npm install
npm run dev
```

> Configure `.env` with your MongoDB URI and JWT secret.

### 3. Start Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Start Admin Panel

```bash
cd ../admin
npm install
npm run dev
```

---

## 📍 Features

* User registration and login
* Browse food menu with categories
* Add to cart, place order, and track status
* Admin dashboard to manage orders and food items
* Order history and delivery address management

---

## 📁 Individual Setup Instructions

Each folder has its own README for in-depth setup:

* [`frontend/README.md`](./frontend/README.md)
* [`backend/README.md`](./backend/README.md)
* [`admin/README.md`](./admin/README.md)

---

## 🤝 Contribution

Contributions, issues, and suggestions are welcome!
Feel free to open a pull request or raise an issue.

---

## 🙌 Acknowledgements

Built with ❤️ by [Naveen Kumar J](https://github.com/Naveen-KumarJ)
