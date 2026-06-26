import { useState } from "react"
import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Home({
  addToCart,
  cart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] =
    useState("All")
  const [selectedGender, setSelectedGender] =
    useState("All")

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory

      const matchesGender =
        selectedGender === "All" ||
        product.gender === selectedGender

      return (
        matchesSearch &&
        matchesCategory &&
        matchesGender
      )
    }
  )

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">
        Products
      </h2>

      {/* Search + Filters */}

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="p-3 rounded-lg border bg-white w-full md:w-1/2"
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }
          className="p-3 rounded-lg border bg-white"
        >
          <option value="All">All Categories</option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Fashion">
            Fashion
          </option>

          <option value="Accessories">
            Accessories
          </option>
        </select>

        <select
          value={selectedGender}
          onChange={(e) =>
            setSelectedGender(
              e.target.value
            )
          }
          className="p-3 rounded-lg border bg-white"
        >
          <option value="All">
            All Genders
          </option>

          <option value="Men">
            Men
          </option>

          <option value="Women">
            Women
          </option>
        </select>
      </div>

      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            cart={cart}
            increaseQuantity={
              increaseQuantity
            }
            decreaseQuantity={
              decreaseQuantity
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Home