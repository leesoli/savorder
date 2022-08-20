import Header from '../../components/Header';
import CartItems from '../../components/Cart-items';
import { useContext } from "react";
import { Context } from '/contexts/index';
import useClicked from '../../hooks/useClicked';
import Link from 'next/link';

export default function Cart () {
  const {cartItems, total} = useContext(Context);
  const [clicked, ref] = useClicked();
  const cart = cartItems.map(item => <CartItems item={item} key={item.id} />);

  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col p-8 sm:p-12 lg:w-3/4 sm:mx-auto">
        {total === 0 &&
        <div className="flex flex-col items-center bg-gray-100 w-2/3 p-4">
          <div className="text-lg">You have no items in your cart</div>
          <Link href="/order">
            <a className="my-4 bg-blue-900 text-white text-md p-4">Checkout Menu</a>
          </Link>
        </div>
        }
        {cart}
        <div className="flex justify-between my-16">
          <span className="text-xl">Subtotal</span>
          <span className="text-2xl">{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
        </div>

        {clicked ?
        <button
          className="w-full p-4 bg-amber-800 text-white text-xl tracking-wider sm:w-48 sm:self-end"
        >
          Loading...
        </button>:
        <button
          className="w-full p-4 bg-amber-800 text-white text-xl tracking-wider sm:w-48 sm:self-end"
          ref={ref}
        >
          Checkout
        </button>
        }
      </main>
    </div>
  )
}