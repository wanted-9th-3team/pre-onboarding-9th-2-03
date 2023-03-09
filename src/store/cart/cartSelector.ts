import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ICartState } from './cartSlice'

const selectCartReducer = (state: RootState): ICartState => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
)

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
)
export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)
