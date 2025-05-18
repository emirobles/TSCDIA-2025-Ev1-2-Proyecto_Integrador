function StatsPanel({ products }) {
  if (!products.length) return null

  const mostExpensive = products.reduce((a, b) => (a.price > b.price ? a : b))
  const cheapest = products.reduce((a, b) => (a.price < b.price ? a : b))
  const longTitles = products.filter(p => p.title.length > 20).length
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0)
  const avgDiscount = (products.reduce((sum, p) => sum + p.discountPercentage, 0) / products.length).toFixed(2)

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-2">Estadísticas</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Producto más caro: {mostExpensive.title} - ${mostExpensive.price}</li>
        <li>Producto más barato: {cheapest.title} - ${cheapest.price}</li>
        <li>Títulos {" > "} 20 caracteres: {longTitles}</li>
        <li>Precio total filtrado: ${totalPrice}</li>
        <li>Descuento promedio: {avgDiscount}%</li>
      </ul>
    </div>
  )
}

export default StatsPanel
