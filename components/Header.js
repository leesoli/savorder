import {
  ShoppingCartIcon,
  MenuIcon
} from '@heroicons/react/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex p-4 justify-between text-white bg-[#B6B29D] items-center border-b-[0.5px] border-gray-600">
      <button className="sm:hidden" aria-label="menu icon">
        <MenuIcon className="w-6 h-6"/>
      </button>
      <div className="font-semibold mr-3 z-10 text-2xl justify-items-center hover:cursor-pointer">
        <Link href="/">
          Mazesoba
        </Link>
      </div>
      <ul className="invisible flex flex-col sm: flex-start sm:visible sm:flex-row absolute sm:static h-screen w-screen sm:h-fit sm:w-fit items-center justify-center sm:justify-between text-2xl sm:text-lg sm:w-2/3 md:w-[28em]">
        <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
          <Link href="/order">
            <a>Order</a>
          </Link>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
          <Link href="/story">
            <a>Our Story</a>
          </Link>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>

      <Link href="/cart">
        <ShoppingCartIcon
          className="h-6 w-6 hover:text-blue-800 hover:cursor-pointer"/>
      </Link>
    </div>
  )
}