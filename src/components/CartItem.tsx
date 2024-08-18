export default function CartItem() {
    return (
        <div className="w-full h-2/5 flex justify-between items-center">
            <img className="w-12 rounded-md" src="./images/image-product-1-thumbnail.jpg" alt="product image" />
            <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                    <span>$125.00</span>
                    <span> x 3 </span>
                    <span>$375.00</span>
                </p>
            </div>
            <img className="w-4 h-4" src="./images/icon-delete.svg" alt="delete icon" />
        </div>
    )
}
