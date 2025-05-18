function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 m-2 shadow hover:scale-105 transition-transform">
          <h2 className="font-bold text-lg mb-1">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
