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
    <div className="flex items-start justify-between border-b-2 border-gray-200 px-8 py-4 md:p-4 sm:border-2 sm:rounded-xl"
      onClick={() => addToCart(item)}
    >
      <div className="w-7/12">
        <div className="text-xl font-bold sm:text-lg">{item.name}</div>
        <div className="text-lg sm:text-base sm:my-2 tracking-wider">{item.description}</div>
        <div className="text-md sm:text-sm">${item.price}</div>
      </div>

      <div className="relative h-20 mb-4 w-3/12 max-w-xs border-2 border-gray-500 rounded-xl sm:h-28">
        <Image
          className="rounded-xl"
          src={`/${item.url}`}
          alt="photo of menu item"
          layout="fill"
          objectFit="cover"
          />
      </div>


    </div>
  )
}