# 🧑‍🍳 TummyTaxi Admin Panel

This is the **Admin Panel** for **TummyTaxi**, a full-stack food delivery web application. The admin interface enables restaurant owners or managers to manage food items, view orders, and update order statuses via a clean and responsive dashboard.

---

## 🚀 Tech Stack

- **React 19**
- **Vite 7**
- **React Router DOM v7.6**
- **Tailwind CSS v4**
- **React Icons**
- **Axios** for API requests
- **React Toastify** for alerts and notifications

---

## 📁 Folder Structure

```

admin/
├── components/
│   ├── Navbar/         # Top navigation bar
│   └── Sidebar/        # Sidebar with navigation links
├── config/
│   └── serverURL.js    # Contains the backend API base URL
├── pages/
│   ├── Add/            # Add new food items
│   ├── List/           # View/edit/delete food items
│   ├── Orders/         # View and update order statuses
│   └── Error/          # Fallback error page
├── routes/
│   └── Router.jsx      # Application routing setup
├── App.jsx             # Layout and routing wrapper
├── main.jsx            # App entry point
├── index.css           # Tailwind base styles
└── README.md           # You are here 📍

````

---

## 🌐 Routes

| Route       | Description                 |
|------------|-----------------------------|
| `/` or `/add`   | Add new food items         |
| `/list`     | Manage the existing food menu |
| `/orders`   | View all orders and change status |
| `*`         | Error fallback route         |

---

## 🧩 Features

- 🔐 Secure access to admin functions
- 📋 Add, view, edit, and delete food items
- 🚚 View all orders and change their status (e.g., Delivered, Cancelled)
- 📊 Responsive design with a clean sidebar and navigation
- 🧠 API-integrated using Axios and token-based auth
- 📦 Modular components for maintainability

---

## 🔧 Setup Instructions

> 💡 Make sure the backend server is running and accessible.

### 1. Clone and Install

```bash
cd admin
npm install
````

### 2. Start the development server

```bash
npm run dev
```

---

## ⚙️ Configuration

Set the API base URL in (Currently Sample URL is Hardcoded):

```js
// config/serverURL.js
export const SERVER_URL = "https://tummytaxi-food-delivery-backend.com";
```

---

## 🔌 Connected Backend Endpoints

All data is fetched and managed using the backend APIs located in the `../backend` folder:

* `/api/v1/food/add`
* `/api/v1/food/list`
* `/api/v1/food/remove`
* `/api/v1/order/all-orders`
* `/api/v1/order/update-status`
* ...and more

> Full endpoint documentation is available inside the [`backend/README.md`](../backend/README.md)

---

## 🤝 Contribution

Open to suggestions, feature requests, and contributions! Feel free to fork and PR.

---

## 🙌 Author

Built with ❤️ by [Naveen Kumar J](https://github.com/Naveen-KumarJ)

```
