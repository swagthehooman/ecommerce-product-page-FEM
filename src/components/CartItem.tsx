import { useAppDispatch } from "../hooks"
import { cartItem, removeFromCart } from "../slices/CartSlice"
export default function CartItem({ cart }: { cart: cartItem }) {
    const dispatch = useAppDispatch()

    return (
        <div className="w-full h-2/5 flex justify-between items-center">
            <img className="w-12 rounded-md" src={`./images/${cart.itemImage}`} alt="product image" />
            <div>
                <p>{cart.itemName}</p>
                <p>
                    <span>${cart.price}</span>
                    <span> x {cart.quantity}</span>
                    <span> ${cart.price * cart.quantity}</span>
                </p>
            </div>
            <button onClick={() => { dispatch(removeFromCart(cart.itemName)) }}>
                <img className="w-4 h-4" src="./images/icon-delete.svg" alt="delete icon" />
            </button>
        </div>
    )
}
