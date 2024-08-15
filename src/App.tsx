import NavBar from "./components/NavBar";
import ProductImage from "./components/ProductImage";

export default function App() {
  return <section className="w-3/5 bg-neutral-white max-[640px]:w-full">
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
            <button className="">
              <img src="./images/icon-minus.svg" alt="decrease amount" />
            </button>
            <p>0</p>
            <button><img src="./images/icon-plus.svg" alt="increase amount" />
            </button>
          </div>
          <button className="bg-orange flex items-center justify-center gap-4 p-2 rounded-md w-full">
            <img src="./images/icon-cart.svg" alt='cart' className="text-neutral-black" />
            <span>Add to cart</span>
          </button>
        </div>
      </article>
    </main>
  </section>
}