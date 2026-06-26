import { useNavigate } from "react-router-dom"

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )
  const navigate = useNavigate()
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">
        Cart Items
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-600">
                  ₹{item.price}
                </p>

                <p className="font-medium mt-1">
                  Subtotal: ₹
                  {item.price * item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                >
                  -
                </button>

                <span className="font-bold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="pt-6 border-t mt-6">
            <h3 className="text-2xl font-bold">
              Total: ₹{totalPrice}
            </h3>

            <button
              onClick={() =>
                navigate("/checkout")
              }
              className="mt-4 bg-black text-white px-6 py-3 rounded-xl"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart