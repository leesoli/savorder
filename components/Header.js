import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline';
import { ShoppingCartIcon as SolidCartIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Context } from '../contexts/index';
import { useContext, useState, useEffect } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);
  const { total } = useContext(Context);

  function openNav () {
    setOpenMenu(false);
    document.querySelector('#menu').classList.remove('hidden');

  }

  function closeNav() {
    setOpenMenu(true);
    document.querySelector('#menu').classList.add('hidden');
  }

  return (
    <div className="flex p-12 sm:p-8 justify-between items-center border-gray-600 w-full">
      {openMenu ?
        <MenuIcon
          onClick={openNav}
          id="open-menu-item"
          className="w-6 h-6 hover:pointer relative text-white sm:invisible"/>:
        <XIcon
          onClick={closeNav}
          id="close-menu-icon"
          className="w-6 h-6 hover:pointer text-black z-50 relative"/>
      }

      <Link href="/">
        <div className="font-semibold z-30 text-2xl hover:cursor-pointer text-white ml-[2em] sm:ml-0 sm:mr-auto">
          Mazesoba
        </div>
      </Link>

      <nav>
        <ul className="hidden fixed bg-white text-black sm:text-white w-full z-10 left-0 top-0 bottom-0 sm:bg-transparent flex flex-col sm: flex-start sm:inline-flex sm:flex-row absolute sm:static sm:h-fit sm:w-fit items-center justify-center sm:justify-between text-2xl sm:text-lg sm:w-[18em] sm:mr-8" id="menu">
          <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
            <Link href="/order">
              <a onClick={closeNav}>Order</a>
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
            <Link href="/menu">
              <a onClick={closeNav}>Menu</a>
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
            <Link href="/story">
              <a onClick={closeNav}>Our Story</a>
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:cursor-pointer tracking-wider">
            <Link href="/contact">
              <a onClick={closeNav}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/cart">
        {total > 0?
        <SolidCartIcon
          className="h-6 w-6 text-white hover:cursor-pointer"
        />:
        <ShoppingCartIcon
          className="h-6 w-6 text-white hover:cursor-pointer"
        />
        }
      </Link>
    </div>
  )
}