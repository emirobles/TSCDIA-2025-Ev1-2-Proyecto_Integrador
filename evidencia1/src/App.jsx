import { useState, useEffect } from "react"
import ProductList from "./components/ProductList"
import StatsPanel from "./components/StatsPanel"
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err))
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl text-blue-600 font-bold mb-4">Catálogo de Productos</h1>

      <input
        type="text"
        placeholder="Buscar por título..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StatsPanel products={filteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App