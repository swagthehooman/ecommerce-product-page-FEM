import MainPage from "./components/MainPage";
import ModalPicture from "./components/ModalPicture";
import { useAppSelector } from "./hooks";

export default function App() {

  const isModalOpen = useAppSelector(state => state.productImage)

  return <section className="w-3/5 bg-neutral-white max-[640px]:w-full">
    {
      isModalOpen.isModalOpen ? <ModalPicture /> :
        <MainPage />
    }
  </section>
}