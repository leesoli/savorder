import Header from '../../components/Header';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../contexts/index';
import OrderItems from '../../components/Order-items';

export default function Order () {
  const {orderItems} = useContext(Context);
  const [category, changeCategory] = useState("all");
  const [catItems, setCategoryItems] = useState([]);

  useEffect(() => {
    setCategoryItems(orderItems);
  }, []);

  useEffect(()=> {
  }, [catItems]);

  function handleClick(cat) {
    changeCategory(cat);
    setCategoryItems(orderItems.filter(item => item.category === cat));
  }

  function renderItems() {
    if (category === "all") {
      return orderItems.map(item => {
        return (
          <OrderItems item={item} key={item.id} />
        )
      });
    } else {
      if (catItems.length >= 3) {
        return catItems.map(item => {
          return (
            <OrderItems item={item} key={item.id} />
          );
        });
      } else {
        return (
          <div>
            {catItems.map(item => <OrderItems item={item} key={item.id} />)}
          </div>
        );
      }
    }
  }

  function setUnderline (category) {
    document.querySelector(".border-b-4").classList.remove("border-b-4");
    document.querySelector(`#category__${category}`).classList.add("border-b-4");
  }

  return (
    <div>
      <Header/>
      <div className="flex flex-col">
        <div className="flex text-md justify-between max-w-sm ml-8 sm:ml-12">
          <span
            className="border-black px-2  hover:cursor-pointer border-b-4"
            id="category__all"
            onClick={() => {
              handleClick("all");
              setUnderline("all");
            }}
          >All</span>
          <span
            className="hover:cursor-pointer border-black px-2"
            id="category__appetizers"
            onClick={() => {
              handleClick("appetizers");
              setUnderline("appetizers");
            }}
            >Appetizers</span>
          <span
            className="hover:cursor-pointer border-black px-2"
            id="category__donburi"
            onClick={() => {
              handleClick("donburi");
              setUnderline("donburi");
            }}
          >Donburi</span>
          <span
            className="hover:cursor-pointer border-black px-2"
            id="category__coldnoodles"
            onClick={() => {
              handleClick("cold noodles");
              setUnderline("coldnoodles");
            }}
          >Cold Noodles</span>
        </div>

        <div className="border-gray-200 border-b-2"></div>

        <div className="mt-16 md:grid md:grid-cols-2 px-2 xl:grid-cols-3 md:gap-x-4 md:gap-y-8 md:w-3/4 md:mr-8">{renderItems()}</div>
      </div>
    </div>
  )
}