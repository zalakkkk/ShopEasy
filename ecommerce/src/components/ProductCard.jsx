function ProductCard({ product, 
                      addToCart, 
                      cart,
                      increaseQuantity,
                      decreaseQuantity, }) {
                        const cartItem = cart.find(
  (item) => item.id === product.id
)
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">
        {product.name}
      </h2>

      <p className="text-gray-600">
        ₹{product.price}
      </p>

      {cartItem ? (
  <div className="flex items-center justify-center gap-3 mt-4">
    <button
      onClick={() =>
        decreaseQuantity(product.id)
      }
      className="bg-red-500 text-white px-3 py-1 rounded-lg"
    >
      -
    </button>

    <span className="font-bold">
      {cartItem.quantity}
    </span>

    <button
      onClick={() =>
        increaseQuantity(product.id)
      }
      className="bg-green-500 text-white px-3 py-1 rounded-lg"
    >
      +
    </button>
  </div>
) : (
  <button
    onClick={() => addToCart(product)}
    className="bg-black text-white px-4 py-2 rounded-lg mt-4 w-full"
  >
    Add To Cart
  </button>
)}
    </div>
  )
}

export default ProductCard