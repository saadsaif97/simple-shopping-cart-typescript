import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateOrAny } from 'react-redux'
import { product } from '../../components/products/Products'

// adding quantity to the cart item
export type cartProduct = product & { quantity?: number }

type initialStateType = {
  items: cartProduct[]
}

const initialState: initialStateType = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<cartProduct>) => {
      const itemFound = state.items.filter(
        (item) => item.id === action.payload.id
      )

      if (itemFound.length === 0) {
        state.items = [{ ...action.payload, quantity: 1 }, ...state.items]
      } else {
        state.items.map((item) =>
          item.id === action.payload.id
            ? item.quantity
              ? (item.quantity += 1)
              : null
            : null
        )
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    increaseItem: (state, action) => {
      state.items.map((item) =>
        item.id === action.payload.id
          ? item.quantity
            ? (item.quantity += 1)
            : null
          : null
      )
    },
    decreaseItem: (state, action) => {
      const targetItem = state.items.filter(
        (item) => item.id === action.payload.id
      )

      if (targetItem[0].quantity && targetItem[0].quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      } else if (targetItem[0].quantity && targetItem[0].quantity > 1) {
        state.items.map((item) =>
          item.id === action.payload.id
            ? item.quantity
              ? (item.quantity -= 1)
              : null
            : null
        )
      }
    },
    emptyTheCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
  emptyTheCart,
} = cartSlice.actions

export default cartSlice.reducer

export const cartSelector = (state: RootStateOrAny) => state.items
