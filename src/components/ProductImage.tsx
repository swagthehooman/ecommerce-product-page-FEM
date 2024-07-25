export default function ProductImage() {
    return <section className="flex flex-col gap-8">
        <img className="rounded-lg" src="./images/image-product-1.jpg" alt="product display" />
        <div className="flex justify-between">
            <img className="rounded-lg h-24 w-24" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail 1" />
            <img className="rounded-lg h-24 w-24" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail 2" />
            <img className="rounded-lg h-24 w-24" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail 3" />
            <img className="rounded-lg h-24 w-24" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail 4" />
        </div>
    </section>
}