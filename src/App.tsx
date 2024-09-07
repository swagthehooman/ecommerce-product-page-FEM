import MainPage from "./components/MainPage";
import ModalPicture from "./components/ModalPicture";
import { useAppDispatch, useAppSelector } from "./hooks";
import { handleMenuModal } from "./slices/MenuSlice";
export default function App() {

  const productModal = useAppSelector(state => state.productImage)
  const dispatch = useAppDispatch()
  const menu = useAppSelector(state => state.menu)
  return <section className={`w-3/5 bg-neutral-white max-[640px]:w-full`}>
    {
      productModal.isModalOpen && <ModalPicture />
    }
    <MainPage />
    {
      menu.isOpen &&
      <div className="absolute w-full h-full top-0 bg-neutral-dark-blue bg-opacity-80">
        <div className="w-[70%] p-8 h-full bg-neutral-white">
          <img src="./images/icon-close.svg" alt="close menu" className="mb-8" onClick={() => dispatch(handleMenuModal())} />
          <menu className="flex flex-col gap-4">
            <li className="cursor-pointer text-neutral-dark-blue font-bold">Collections</li>
            <li className="cursor-pointer text-neutral-dark-blue font-bold">Men</li>
            <li className="cursor-pointer text-neutral-dark-blue font-bold">Women</li>
            <li className="cursor-pointer text-neutral-dark-blue font-bold">About</li>
            <li className="cursor-pointer text-neutral-dark-blue font-bold">Contact</li>
          </menu>
        </div>
      </div>
    }
  </section>
}