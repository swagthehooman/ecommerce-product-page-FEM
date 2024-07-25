export default function NavBar() {
    return <nav className="pt-8 pb-8 flex justify-between">
        <menu className="w-2/3 flex justify-between items-center text-sm">
            <li><img src="./images/logo.svg" alt="logo" /></li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </menu>
        <div className="w-[10%] flex justify-between items-center">
            <img src="./images/icon-cart.svg" alt="cart" />
            <img className="h-12 w-12" src="./images/image-avatar.png" alt="profile" />
        </div>
    </nav>
}