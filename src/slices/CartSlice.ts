import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartItem = {
    itemName: string|null,
    price: number,
    quantity: number,
    itemImage: string|null
}

const initialState: cartItem[] = []

const CartSlice = createSlice({
    initialState: initialState,
    name: "cart",
    reducers:{
        //reducer to add item to cart
        addToCart: (state, action: PayloadAction<cartItem>) => {
            if(!state.find(i=> action.payload.itemName===i.itemName))
                return [...state, action.payload]
            return [...state]
        },
        //reducer to remove the item from cart
        removeFromCart: (state, action: PayloadAction<string>) => {
            return state.filter(i=> i.itemName!==action.payload);
        },
        // reducer to change cart item quantity. op ==1 for increment, anything else for decrement
        changeItemQuantity: (state, action: PayloadAction<{itemName: string, op: number}>) => {
            const item:cartItem|undefined = state.find(i=> i.itemName===action.payload.itemName)
            if(item!==undefined){
                const tempState = state.filter(i=> i.itemName===action.payload.itemName)
                return [...tempState, {
                    itemName: item.itemName,
                    itemImage: item.itemImage,
                    price: item.price,
                    quantity: (action.payload.op === 1) ? (item.quantity+1) : (item.quantity>0 ? item.quantity-1 : 0)
                }];
            }
        }, 
    }
}) 

export const {addToCart, removeFromCart} = CartSlice.actions

export default CartSlice.reducer