import React, {useContext, useState} from "react";
import { Context } from "../contexts/index";
import Image from 'next/image';
import {MinusIcon, PlusIcon, XIcon} from '@heroicons/react/outline';

export default function CartItems ({item}) {
  const {removeFromCart, updateCart} = useContext(Context);
  const [isHovered, setHoveredState] = useState(false);
  const [quantity, setQuantity] = useState(item.count);

  function changeQuantity(e) {
    const {name, value, id} = e.target;
    setQuantity(value);
    updateCart(id, value);
  }

  function updateQuantity(id, value) {
    const result = Number(quantity) + value;
    if (result > 0) {
      setQuantity(result);
      updateCart(id, result);
    }
  }

  return (
    <div className="flex mb-8 border-b-[1px] pb-8 border-gray-300 justify-between">
      <div className="relative w-28 h-20 sm:w-52 sm:h-36">
        <Image layout="fill" alt="image of menu item" objectFit="cover" src={`/${item.url}`}/>
      </div>

      <div className="flex flex-col justify-between sm:flex-row md:w-1/3">
        <div className="text-xl md:text-2xl">{item.name}</div>
        <div className="flex items-center sm:items-start">
          <MinusIcon
            onClick={() => updateQuantity(item.id, -1)}
            className="w-5 h-5 md:w-6 md:h-6 hover:bg-gray-100 hover:rounded-xl sm:ml-4 sm:mt-[1px]"/>
          <div>
            <input
              type="text"
              id={item.id}
              value={quantity}
              onChange={changeQuantity}
              min={1}
              className="w-8 sm:w-12 px-2 mx-2 text-center text-lg lg:text-xl"
            >
            </input>
          </div>
          <PlusIcon
            className="w-5 h-5 md:w-6 md:h-6 hover:bg-gray-100 hover:rounded-xl sm:mt-[1px]"
            onClick={() => updateQuantity(item.id, 1)}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between sm:flex-row-reverse sm:w-1/4 pr-4">
        <XIcon
          className="w-7 h-7 hover:bg-gray-100 hover:rounded-xl self-end sm:self-start"
          onClick={() => removeFromCart(item.id, item)}
        />
        <div className="sm:text-xl">
          {(item.price * quantity).toLocaleString("en-US", {style: "currency", currency: "USD"})}
        </div>
      </div>
    </div>

  )
}