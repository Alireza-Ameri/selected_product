import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/src/types/products'

interface SelectedProductsState {
  items: IProduct[]
}

const initialState: SelectedProductsState = {
  items: [],
}

const selectedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addProduct, removeProduct } = selectedProductsSlice.actions
export default selectedProductsSlice.reducer
