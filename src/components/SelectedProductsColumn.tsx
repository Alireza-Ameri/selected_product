import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { removeProduct } from '../store/selectedProductsSlice'

const SelectedProductsColumn: React.FC = () => {
  const selectedProducts = useSelector((state: RootState) => state.selectedProducts.items)
  const dispatch = useDispatch()

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-[95vh] overflow-auto">
    <h2 className="text-xl font-semibold mb-4">Selected Products</h2>
    <ul>
      {selectedProducts.map((product) => (
        <li
          key={product.id}
          onClick={() => dispatch(removeProduct(product.id))}
          className="p-4 mb-2 border rounded hover:bg-red-100 cursor-pointer transition-all flex items-center space-x-4"
        >
          <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-md" />
          <div>
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SelectedProductsColumn
