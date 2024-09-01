import { useAppSelector } from "../hooks"

export default function ModalPicture() {

    const picture = useAppSelector(state => state.productImage);

    return (
        <div>
            <button>
                x
            </button>
            <div>
                <button></button>
                <img />
                <button></button>
            </div>
            <div>
                <img />
                <img />
                <img />
                <img />
            </div>
        </div>
    )
}
