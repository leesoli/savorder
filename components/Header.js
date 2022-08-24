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
  const { total, theme, toggleTheme, activePage, changePage } = useContext(Context);

  useEffect(() => {
    checkTheme();
  }, [])

  useEffect(() => {
    if (activePage === 'home' && theme === 'dark') {
      toggleTheme();
    } else if (activePage !== 'home' && theme === 'light') {
      toggleTheme();
    }
  }, [activePage])

  useEffect(() => {
    checkTheme();
  }, [theme])

  function checkTheme () {
    const logo = document.getElementById('logo');
    const cart = document.getElementById('cart-icon');
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('open-menu-item');

    if (theme === 'light') {
      logo.classList.remove('dark-header');
      cart.classList.remove('dark-header');
      menu.classList.remove('dark-header');
      menuIcon.classList.remove('dark-header');
      logo.classList.add('light-header');
      cart.classList.add('light-header');
      menu.classList.add('light-header');
      menuIcon.classList.add('light-header');
    } else if (theme === 'dark') {
      menu.classList.remove('light-header');
      cart.classList.remove('light-header');
      logo.classList.remove('light-header');
      menuIcon.classList.remove('light-header');
      menu.classList.add('dark-header');
      cart.classList.add('dark-header');
      logo.classList.add('dark-header');
      menuIcon.classList.add('dark-header');
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
    if (activePage === 'home') {
      menu.classList.remove('dark-header');
      menu.classList.add('light-header');
    }
  }

  return (
    <div className="flex p-8 justify-between items-center border-gray-600 w-full">
      {openMenu ?
        <MenuIcon
          onClick={openNav}
          id="open-menu-item"
          className="w-6 h-6 hover:pointer relative sm:invisible"
          />:
        <XIcon
          onClick={closeNav}
          id="close-menu-icon"
          className="w-6 h-6 hover:pointer text-black z-50 relative"/>
      }

      <Link href="/">
        <div
          className="font-semibold z-30 text-2xl hover:cursor-pointer ml-[2em] sm:ml-0 sm:mr-auto"
          id="logo"
          onClick={() => {
            changePage('home')
          }}
        >
          Mazesoba
        </div>
      </Link>

      <nav>
        <ul className="hidden fixed bg-white w-full z-10 left-0 top-0 bottom-0 sm:bg-transparent flex flex-col sm: flex-start sm:inline-flex sm:flex-row absolute sm:static sm:h-fit sm:w-fit items-center justify-center sm:justify-between text-2xl sm:text-lg sm:w-[12em] sm:mr-8" id="menu">
          {["order", "story", "contact"].map((url, index) => (
            <li key={index} className="hover:cursor-pointer hover:scale-105 transition ease-in-out duration-300 tracking-wider capitalize p-2 sm:p-0">
              <Link href={'/'+ url}>
                <a onClick={() => {
                  closeNav()
                  changePage(url)
                }}>{url}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/cart">
        {total > 0?
        <SolidCartIcon
        onClick={() => {
          changePage("cart")
        }}
        className="h-6 w-6 hover:cursor-pointer hover:scale-110 transition ease-in-out sm:mr-4"
        id="cart-icon"
      />:
        <ShoppingCartIcon
          onClick={() => {
            changePage("cart")
          }}
          className="h-6 w-6 hover:cursor-pointer hover:scale-110 transition ease-in-out sm:mr-4"
          id="cart-icon"
        />}
      </Link>
    </div>
  )
}