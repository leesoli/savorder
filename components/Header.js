import {
  ShoppingCartIcon,
  MenuIcon
} from '@heroicons/react/outline';
import NavItems from './NavItems';

export default function Header() {
  return (
    <div className="flex p-4 justify-between  items-center border-b-[1px]">
      <button className="sm:hidden">
        <MenuIcon className="w-6 h-6"/>
      </button>
      <div className="font-semibold mr-3 z-10 text-2xl justify-items-center hover:cursor-pointer">Mazesoba</div>
      <ul className="invisible flex flex-col sm: flex-start sm:visible sm:flex-row absolute sm:static h-screen w-screen sm:h-fit sm:w-fit items-center justify-center bg-white sm:justify-between text-2xl sm:text-lg sm:w-96">
        <NavItems Items={"Home"}/>
        <NavItems Items={"Order"}/>
        <NavItems Items={"Menu"}/>
        <NavItems Items={"Our Story"}/>
        <NavItems Items={"Contact Us"}/>
      </ul>

      <ShoppingCartIcon className="h-6 w-6 hover:text-blue-800 hover:cursor-pointer"/>
    </div>
  )
}