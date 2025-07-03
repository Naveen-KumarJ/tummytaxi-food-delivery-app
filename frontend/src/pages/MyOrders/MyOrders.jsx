import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import moment from "moment";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const MyOrders = () => {
  const { token, SERVER_URL, food_list } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/v1/order/my-orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setOrders(response.data.data);
        setError("");
      } else {
        setError("Failed to fetch orders");
      }
    } catch (err) {
      setError(
        "Something went wrong while fetching your orders." + err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Placed":
        return "text-yellow-500";
      case "Processing":
        return "text-blue-500";
      case "Delivered":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h2>

      {loading ? (
        <p className="text-gray-600">Loading your orders...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">You have not placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Order #{index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}
                  </p>
                </div>
                <span
                  className={`text-sm font-medium ${getStatusColor(
                    order.status || "Placed"
                  )}`}
                >
                  {order.status || "Placed"}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3 border-t pt-4">
                {order.items.map((item, idx) => {
                  const foodItem = food_list.find((f) => f._id === item._id);
                  return (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-700">
                        {foodItem?.name || "Item"} × {item.quantity}
                      </span>
                      <span className="text-gray-800 font-medium">
                        ₹{item.quantity * (foodItem?.price || 0)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Address */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">
                  Delivery Address:
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {order.address.firstName} {order.address.lastName},<br />
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state} - {order.address.zipCode},{" "}
                  {order.address.country}
                  <br />
                  📞 {order.address.phone}
                </p>
              </div>

              {/* Total */}
              <div className="mt-4 flex justify-end text-base font-bold text-gray-800">
                Total: ₹{order.amount}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
