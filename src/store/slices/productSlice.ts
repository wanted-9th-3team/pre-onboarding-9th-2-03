import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Product {
    idx: number
    name: string
    mainImage: string
    description: string
    spaceCategory: string
    price: number
    maximumPurchases: number
    registrationDate: string
}

export interface CommonState {
    productList: Product[]
}

const initialState: CommonState = {
    productList: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<Product[]>) {
            const copyState = state
            copyState.productList = action.payload
            return copyState
        },
    },
})

export const {setProduct} = productSlice.actions

export default productSlice
