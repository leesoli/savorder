import { useContext, useState, useEffect } from "react"
import { Context } from "../contexts/index";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { CheckCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function OrderItems ({item}) {
  const {addToCart} = useContext(Context);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleClick () {
    setClicked(true);
  }

  useEffect(() => {
    if (clicked) {
      setTimeout(() => setClicked(false), 1000);
    }
  }, [clicked]);

  return (
    <div className="flex flex-col items-center pb-16">
      <div className="relative h-80 md:h-48 w-full mb-4 max-w-64">
      <Image
        src={`/${item.url}`}
        alt="photo of menu item"
        layout="fill"
        objectFit="cover"
        />
      </div>
      <div className="text-2xl my-2 md:text-xl">{item.name}</div>
      <div className="max-w-lg text-xl text-center leading-8 tracking-wider md:text-lg mb-2">{item.description}</div>
      <div className="text-xl md:text-lg mb-4">${item.price}</div>

      {clicked ?
        <button className="flex items-center p-1 border-green-700 border-2 text-green-700 uppercase text-xs mt-auto">
          < CheckCircleIcon className="w-6 h-6 mr-2" /> Added to cart
        </button>:
        <button
          className="uppercase p-1 border-2 border-black tracking-wide overflow-hidden relative ease-in-out duration-200 mt-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => {
            addToCart(item);
            handleClick();
          }}
        >
          <span className="ease-in-out text-xs">Add to cart</span>
          {/* <ShoppingCartIcon className="w-6 h-6  top-[50%] right-[-35px] ease-linear duration-400 translate-y-[-50%] text-red-500 hover:right-[10px]"/> */}
        </button>}
    </div>
  )
}