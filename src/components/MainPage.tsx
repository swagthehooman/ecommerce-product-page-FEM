import { useState } from 'react';
import NavBar from './NavBar'
import ProductImage from './ProductImage'
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToCart, changeItemQuantity } from "../slices/CartSlice";

export default function MainPage() {
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector(state => state.cartItems);
    const [localQuantity, setLocalQuantity] = useState<number>(0);

    const onAddToCartClick = () => {
        dispatch(addToCart({
            itemImage: "image-product-1-thumbnail.jpg",
            itemName: "Fall Limited Edition Sneakers",
            price: 125.0,
            quantity: localQuantity === 0 ? 1 : localQuantity
        }))
        setLocalQuantity(0)
    }

    const onAddQuantityClick = () => {
        if (cartItem.find(i => i.itemName === "Fall Limited Edition Sneakers"))
            dispatch(changeItemQuantity({ itemName: "Fall Limited Edition Sneakers", op: 1 }))
        else
            setLocalQuantity(prev => prev + 1);
    }

    const onReduceQuantityClick = () => {
        if (cartItem.find(i => i.itemName === "Fall Limited Edition Sneakers"))
            dispatch(changeItemQuantity({ itemName: "Fall Limited Edition Sneakers", op: 2 }))

        else
            setLocalQuantity(prev => prev > 0 ? prev - 1 : 0);
    }

    return (
        <>
            <NavBar />
            <hr />
            <main className="grid grid-cols-2 gap-32 mt-12 max-[640px]:grid-cols-none max-[640px]:gap-0 max-[640px]:mt-0">
                <ProductImage />
                <article className="mt-auto mb-auto flex flex-col gap-8 max-[640px]:p-8">
                    <span className="tracking-widest text-sm font-bold">SNEAKER COMPANY</span>
                    <h1 className="text-neutral-black text-5xl font-bold max-[640px]:text-4xl">Fall Limited Edition Sneakers</h1>
                    <p className="">These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className="max-[640px]:flex max-[640px]:justify-between max-[640px]:items-center">
                        <div className="flex gap-4 items-center">
                            <h1 className="text-neutral-black text-4xl font-bold">$125.00</h1>
                            <span className="text-neutral-white rounded-md bg-neutral-dark-blue p-2">50%</span>
                        </div>
                        <span className="text-neutral-dark-gray-blue font-bold line-through">$250.00</span>
                    </div>
                    <div className="flex justify-between gap-4 text-neutral-black font-semibold max-[640px]:flex-col max-[640px]:gap-8">
                        <div className="flex w-[30%] justify-between p-2 rounded-md bg-neutral-light-grey-blue max-[640px]:w-full">
                            <button onClick={onReduceQuantityClick}>
                                <img src="./images/icon-minus.svg" alt="decrease amount" />
                            </button>
                            <p>{cartItem.find(i => i.itemName === "Fall Limited Edition Sneakers")?.quantity ?? localQuantity}</p>
                            <button onClick={onAddQuantityClick}>
                                <img src="./images/icon-plus.svg" alt="increase amount" />
                            </button>
                        </div>
                        <button className="bg-orange flex items-center justify-center gap-4 p-2 rounded-md w-full" onClick={onAddToCartClick}>
                            <img src="./images/icon-cart.svg" alt='cart' className="text-neutral-black" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </article>
            </main>
        </>
    )
}
