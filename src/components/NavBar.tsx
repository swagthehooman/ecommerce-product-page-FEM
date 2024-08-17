export default function NavBar() {
    return <nav className="pt-8 pb-8 flex justify-between max-[640px]:p-4">
        <menu className="w-2/3 flex justify-between items-center text-sm max-[640px]:w-auto max-[640px]:gap-4">
            <img className="min-[640px]:hidden" src="./images/icon-menu.svg" alt="menu" />
            <li><img className="cursor-pointer" src="./images/logo.svg" alt="logo" /></li>
            <li className="max-[640px]:hidden cursor-pointer">Collections</li>
            <li className="max-[640px]:hidden cursor-pointer">Men</li>
            <li className="max-[640px]:hidden cursor-pointer">Women</li>
            <li className="max-[640px]:hidden cursor-pointer">About</li>
            <li className="max-[640px]:hidden cursor-pointer">Contact</li>

        </menu>
        <div className="w-[10%] flex justify-between items-center max-[640px]:w-auto max-[640px]:gap-4">
            <img className="cursor-pointer" src="./images/icon-cart.svg" alt="cart" />
            <img className="h-12 w-12 cursor-pointer" src="./images/image-avatar.png" alt="profile" />
        </div>
    </nav>
}