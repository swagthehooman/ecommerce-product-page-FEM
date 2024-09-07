import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks";
import CartItem from "./CartItem";
import { handleMenuModal } from "../slices/MenuSlice";

export default function NavBar() {

    const cartItems = useAppSelector((state) => state.cartItems)
    const [showCartItem, setShowCartItem] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const getCartQuantity = (): number => {
        let totalCartCapacity: number = 0;
        cartItems.forEach(i => {
            totalCartCapacity = i.quantity + totalCartCapacity
        })
        return totalCartCapacity;
    }

    return <nav className="pt-8 pb-8 flex justify-between max-[640px]:p-4">
        <menu className="w-2/3 flex justify-between items-center text-sm max-[640px]:w-auto max-[640px]:gap-4">
            <img className="min-[640px]:hidden" src="./images/icon-menu.svg" alt="menu" onClick={() => dispatch(handleMenuModal())} />
            <li><img className="cursor-pointer" src="./images/logo.svg" alt="logo" /></li>
            <li className="max-[640px]:hidden cursor-pointer">Collections</li>
            <li className="max-[640px]:hidden cursor-pointer">Men</li>
            <li className="max-[640px]:hidden cursor-pointer">Women</li>
            <li className="max-[640px]:hidden cursor-pointer">About</li>
            <li className="max-[640px]:hidden cursor-pointer">Contact</li>
        </menu>

        <div className="-z-0 relative w-[10%] flex justify-between items-center max-[640px]:w-auto max-[640px]:gap-4">
            <div className="relative">
                {
                    getCartQuantity() > 0 &&
                    <span className="absolute text-sm bg-orange font-bold pl-1 pr-1 rounded-full -top-3 -right-1 text-neutral-light-grey-blue">
                        {getCartQuantity()}
                    </span>
                }
                <img className="cursor-pointer" onClick={() => setShowCartItem(prev => !prev)} src="./images/icon-cart.svg" alt="cart" />
            </div>
            {
                showCartItem &&
                <div className="absolute top-14 left-1/2 -translate-x-1/2
                 w-96 h-42 rounded-md bg-neutral-white shadow-lg p-4 max-[640px]:top-16 max-[640px]:-translate-x-[90%]">
                    <p className="font-bold text-neutral-dark-blue">Cart</p>
                    <hr />
                    <div className={`pt-4 h-full w-full flex ${cartItems.length === 0 ? "flex-col gap-4" : "flex-col gap-4 justify-center items-center"}`}>
                        {cartItems.length === 0 &&
                            <p className="text-center font-bold text-neutral-dark-gray-blue">Your cart is empty</p>
                        }
                        {
                            cartItems.map(i => <CartItem cart={i} />)
                        }
                        {
                            cartItems.length > 0 &&
                            <button className="w-full p-2 rounded-md font-bold text-neutral-dark-blue bg-orange">Checkout</button>
                        }
                    </div>
                </div>
            }

            <img className="h-12 w-12 cursor-pointer" src="./images/image-avatar.png" alt="profile" />
        </div>
    </nav>
}