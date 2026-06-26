import { useState, useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("cart")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
  }, [cart])

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )

      setCart(updatedCart)
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ])
    }
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )

    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)

    setCart(updatedCart)
  }

  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar
          cartCount={
            cart.reduce(
              (total, item) =>
                total + item.quantity,
              0
            )
          }
/>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQuantity={
                  increaseQuantity
                }
                decreaseQuantity={
                  decreaseQuantity
                }
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/success"
            element={<Success />}
          />
                  </Routes>
                </div>
              </BrowserRouter>
            )
          }

export default App