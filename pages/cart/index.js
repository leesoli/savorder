import Header from '../../components/Header';
import CartItems from '../../components/Cart-items';
import { useContext } from "react";
import useClicked from '../../hooks/useClicked';
import { Context } from '/contexts/index';

export default function Cart () {
  const {cartItems, total} = useContext(Context);
  const [clicked, ref] = useClicked();
  const cart = cartItems.map(item => <CartItems item={item} key={item.id} />);

  return (
    <div className="w-screen">
      <Header />
      <main className="flex flex-col p-8 lg:w-3/4 sm:mx-auto">
        <h2 className="text-4xl font-normal mb-12">Shopping Cart</h2>
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