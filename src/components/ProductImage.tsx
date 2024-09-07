import { useAppDispatch } from "../hooks"
import { setThumbnailImage } from "../slices/ProductImageSelectionSlice"

export default function ProductImage() {

    const dispatch = useAppDispatch();

    return <section className="flex flex-col gap-8">
        <img className="rounded-lg max-[640px]:rounded-none max-[640px]:w-screen" src="./images/image-product-1.jpg" alt="product display" />
        <div className="flex justify-between max-[640px]:hidden">
            <img className="cursor-pointer hover:opacity-40 rounded-lg max-[860px]:h-16 max-[860px]:w-16 h-24 w-24" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail 1" onClick={() => dispatch(setThumbnailImage(1))} />
            <img className="cursor-pointer hover:opacity-40 max-[860px]:h-16 max-[860px]:w-16 rounded-lg h-24 w-24" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail 2" onClick={() => dispatch(setThumbnailImage(2))} />
            <img className="cursor-pointer hover:opacity-40 max-[860px]:h-16 max-[860px]:w-16 rounded-lg h-24 w-24" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail 3" onClick={() => dispatch(setThumbnailImage(3))} />
            <img className="cursor-pointer hover:opacity-40 max-[860px]:h-16 max-[860px]:w-16 rounded-lg h-24 w-24" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail 4" onClick={() => dispatch(setThumbnailImage(4))} />
        </div>
    </section>
}