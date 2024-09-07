import { createSlice } from "@reduxjs/toolkit";

type menu = {
    option: string|null,
    isOpen: boolean
}

const initialState:menu = {
    option: null,
    isOpen: false
}

export const MenuSlice = createSlice({
    initialState: initialState,
    name: 'menu',
    reducers:{
        handleMenuModal: (state)=>{
            return {
                ...state,
                isOpen: !state.isOpen
            }
        }
    }
});

export const {handleMenuModal} = MenuSlice.actions

export default MenuSlice.reducer