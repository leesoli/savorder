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
  const { total, theme, toggleTheme } = useContext(Context);

  useEffect(() => {
    checkTheme();
  }, [theme])

  function checkTheme() {
    const logo = document.getElementById('logo');
    const cart = document.getElementById('cart-icon');
    const menu = document.getElementById('menu');
    if (theme === 'light') {
      menu.classList.remove('dark-header');
      cart.classList.remove('dark-header');
      logo.classList.remove('dark-header');
      menu.classList.add('light-header');
      cart.classList.add('light-header');
      logo.classList.add('light-header');
    } else if (theme === 'dark') {
      menu.classList.remove('light-header');
      cart.classList.remove('light-header');
      logo.classList.remove('light-header');
      menu.classList.add('dark-header');
      cart.classList.add('dark-header');
      logo.classList.add('dark-header');
    }
  }

  function openNav () {
    const menu = document.getElementById('menu');
    setOpenMenu(false);
    menu.classList.remove('hidden');
    menu.classList.remove('light-header');
    menu.classList.add('dark-header');
  }

  function closeNav() {
    const menu = document.getElementById('menu');
    setOpenMenu(true);
    menu.classList.add('hidden');
    menu.classList.add('light-header');
    menu.classList.remove('dark-header');
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
        <div
          className="font-semibold z-30 text-2xl hover:cursor-pointer ml-[2em] sm:ml-0 sm:mr-auto light-header"
          id="logo"
          onClick={() => {
            if (theme === 'dark') {
              toggleTheme('light');
            }
          }}
        >
          Mazesoba
        </div>
      </Link>

      <nav>
        <ul className="hidden fixed light-header bg-white w-full z-10 left-0 top-0 bottom-0 sm:bg-transparent flex flex-col sm: flex-start sm:inline-flex sm:flex-row absolute sm:static sm:h-fit sm:w-fit items-center justify-center sm:justify-between text-2xl sm:text-lg sm:w-[18em] sm:mr-8" id="menu">
          {["order", "menu", "story", "contact"].map(url => (
            <li className="hover:cursor-pointer tracking-wider capitalize">
              <Link href={'/'+ url}>
                <a onClick={() => {
                  closeNav()
                  if (theme === 'light') {
                    toggleTheme('dark');
                  }
                }}>{url}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/cart">
        {total > 0?
        <SolidCartIcon
          className="h-6 w-6 hover:cursor-pointer"
          id="solid-cart-icon"
        />:
        <ShoppingCartIcon
          className="h-6 w-6 light-header hover:cursor-pointer"
          id="cart-icon"
        />
        }
      </Link>
    </div>
  )
}