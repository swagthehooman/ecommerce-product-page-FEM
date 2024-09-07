import { useAppDispatch, useAppSelector } from "../hooks"
import { nextImage, prevImage, modalState, setThumbnailImage } from "../slices/ProductImageSelectionSlice";

export default function ModalPicture() {

    const picture = useAppSelector(state => state.productImage);
    const dispatch = useAppDispatch();
    return (
        <section className="w-screen h-screen bg-opacity-60 bg-neutral-dark-blue absolute -left-1/2 translate-x-1/2 grid place-content-center">

            <button className="w-4 ml-auto fill-current text-neutral-white" onClick={() => dispatch(modalState())}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" /></svg>
            </button>
            <div className="flex justify-center items-center relative">
                <button className="absolute top-1/2 left-10 p-4 rounded-full bg-neutral-light-grey-blue -translate-y-1/2" onClick={() => dispatch(prevImage())}><img src="./images/icon-previous.svg" /></button>
                <img className="h-4/5 w-4/5 rounded-md" src={picture.url} alt="modal picture" />
                <button className="absolute top-1/2 right-10 p-4 rounded-full bg-neutral-light-grey-blue -translate-y-1/2" onClick={() => dispatch(nextImage())}><img src="./images/icon-next.svg" /></button>
            </div>
            <div className="flex justify-center gap-4">
                <img className="cursor-pointer rounded-lg w-24" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail 1" onClick={() => dispatch(setThumbnailImage(1))} />
                <img className="cursor-pointer rounded-lg w-24" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail 2" onClick={() => dispatch(setThumbnailImage(2))} />
                <img className="cursor-pointer rounded-lg w-24" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail 3" onClick={() => dispatch(setThumbnailImage(3))} />
                <img className="cursor-pointer rounded-lg w-24" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail 4" onClick={() => dispatch(setThumbnailImage(4))} />
            </div>
        </section>
    )
}
