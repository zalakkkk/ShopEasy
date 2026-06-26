import { Link } from "react-router-dom"

function Success() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600">
          Order Placed!
        </h1>

        <p className="mt-4 text-gray-600">
          Your order has been placed successfully.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default Success