import { Link } from "react-router-dom"

function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        ShopEasy
      </h1>

      <div className="flex gap-5 items-center">
        <Link to="/">Home</Link>

        <Link
          to="/cart"
          className="bg-white text-black px-3 py-1 rounded-lg"
        >
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar