import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [payment, setPayment] =
    useState("UPI")

  const navigate = useNavigate()

  const handleOrder = () => {
    if (!name || !address || !phone) {
      alert("Please fill all details")
      return
    }

    navigate("/success")
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">
          Checkout
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <select
            value={payment}
            onChange={(e) =>
              setPayment(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          >
            <option>UPI</option>
            <option>Card</option>
            <option>
              Cash on Delivery
            </option>
          </select>

          <button
            onClick={handleOrder}
            className="w-full bg-black text-white py-3 rounded-xl mt-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout