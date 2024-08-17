import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pictureState = {
    url: string,
    index: number 
}

const initialState:pictureState = {
    index: 1,
    url: './images/image-product-1.jpg'
}

export const ProductImageSelectionSlice = createSlice({
    initialState: initialState,
    name: 'productImage',
    reducers:{
        nextImage: (state) => {
            if(state.index<4){
                return {
                    index: state.index+1,
                    url: `./images/image-product-${state.index+1}.jpg`
                }
            }
            else{
                return {
                    index: 1,
                    url: `./images/image-product-1.jpg`
                }
            }
        },
        prevImage: (state) => {
            if(state.index>1){
                return {
                    index: state.index-1,
                    url: `./images/image-product-${state.index-1}.jpg`
                }
            }
            else{
                return {
                    index: 4,
                    url: `./images/image-product-4.jpg`
                }
            }
        },
        thumbnailImage: (state, action: PayloadAction<number>)=>{
            return {
                index: action.payload,
                url: `./images/image-product-${action.payload}.jpg`
            }
        }
    }
})

export const {nextImage, prevImage} = ProductImageSelectionSlice.actions

export default ProductImageSelectionSlice.reducer