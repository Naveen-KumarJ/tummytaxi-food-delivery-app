
# 🍽️ TummyTaxi Frontend

Welcome to the **frontend** of **TummyTaxi** — a modern, responsive food delivery web application built with React and Tailwind CSS.

👉 **Live Demo**: [https://tummytaxi-food-delivery-frontend.onrender.com](https://tummytaxi-food-delivery-frontend.onrender.com)  

---

## 🚀 Tech Stack

- **React** (v19)
- **Vite** (v7)
- **Tailwind CSS** (v4)
- **React Router DOM** (v7.6)
- **Axios** – API communication
- **Moment.js** – Time formatting
- **React Icons** – Icon library
- **React Toastify** – Notifications


---

## 📁 Folder Structure

```

frontend/
├── components/       # Reusable UI components (Navbar, Footer, Hero, etc.)
├── context/      # Global Store using React Context API
├── pages/            # Route-based pages (Home, Cart, Menu, etc.)
├── App.jsx           # Root component with layout
├── main.jsx          # App entry point
├── router/           # React Router setup with protected routes
└── README.md         # You are here 📍

````

---

## 🌐 Routes Overview

| Route           | Description                        | Protected |
|----------------|------------------------------------|-----------|
| `/`            | Homepage                           | ❌        |
| `/menu`        | Food Menu                          | ✅        |
| `/cart`        | Cart Page                          | ✅        |
| `/order`       | Place Order                        | ✅        |
| `/my-orders`   | View User Orders                   | ✅        |
| `/contact-us`  | Contact Us Page                    | ❌        |
| `/mobile-app`  | Mobile App Download Info           | ❌        |

---

## 🔐 Protected Routing

Pages like `/menu`, `/cart`, `/order`, and `/my-orders` are wrapped in a `<ProtectedRoute>` component that checks for a valid JWT token in the global store (`StoreContext`).

---

## 📦 Setup Instructions

### 1. Install dependencies

```bash
cd frontend
npm install
````

### 2. Run development server

```bash
npm run dev
```

### 3. Environment Config

Set the backend server URL in the context (currently hardcoded with sample link):

```js
const SERVER_URL = "https://tummytaxi-food-delivery-backend.com";
```

---

## 🛠 Features

* Smooth scrollable single-page layout
* Responsive design for all screen sizes
* Authentication with JWT
* Add, remove, and clear cart items
* Display order history
* Razorpay integration for payments (via backend)
* Admin dashboard (separate in `/admin` folder)

---

## 📍 Connected Modules

* 🔗 [Backend Repository](../backend/README.md)
* 🔗 [Admin Panel](../admin/README.md)

---

## 🙌 Author

Built with ❤️ by [Naveen Kumar J](https://github.com/Naveen-KumarJ)
