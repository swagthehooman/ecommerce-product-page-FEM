import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pictureState = {
    url: string,
    index: number,
    isModalOpen: boolean
}

const initialState:pictureState = {
    index: 1,
    url: './images/image-product-1.jpg',
    isModalOpen: false
}

export const ProductImageSelectionSlice = createSlice({
    initialState: initialState,
    name: 'productImage',
    reducers:{
        nextImage: (state) => {
            if(state.index<4){
                return {
                    index: state.index+1,
                    url: `./images/image-product-${state.index+1}.jpg`,
                    isModalOpen: true
                }
            }
            else{
                return {
                    index: 1,
                    url: `./images/image-product-1.jpg`,
                    isModalOpen: true
                }
            }
        },
        prevImage: (state) => {
            if(state.index>1){
                return {
                    index: state.index-1,
                    url: `./images/image-product-${state.index-1}.jpg`,
                    isModalOpen: true
                }
            }
            else{
                return {
                    index: 4,
                    url: `./images/image-product-4.jpg`,
                    isModalOpen: true
                }
            }
        },
        setThumbnailImage: (_state, action: PayloadAction<number>)=>{
            return {
                index: action.payload,
                url: `./images/image-product-${action.payload}.jpg`,
                isModalOpen: true
            }
        },
        modalState: (state)=>{
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        }
    }
})

export const {nextImage, prevImage, modalState, setThumbnailImage} = ProductImageSelectionSlice.actions

export default ProductImageSelectionSlice.reducer