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
    document.querySelector(".font-bold").classList.remove("font-bold");
    document.querySelector(`#category__${category}`).classList.add("font-bold");
  }

  return (
    <div>
      <Header/>
      <div className="px-8 py-12 md:py-24 md:flex md:justify-between xl:justify-start">
        <div className="flex text-lg w-96 justify-between mb-8 md:flex-col md:mb-0 md:max-w-xs md:h-fit ml-2">
          <span
            className="border-r-2 pr-4 border-gray-100 md:border-none hover:cursor-pointer md:p-2 font-bold"
            id="category__all"
            onClick={() => {
              handleClick("all");
              setUnderline("all");
            }}
          >All</span>
          <span
            className="border-r-2 pr-4 border-gray-100 md:border-none hover:cursor-pointer md:p-2"
            id="category__appetizers"
            onClick={() => {
              handleClick("appetizers");
              setUnderline("appetizers");
            }}
            >Appetizers</span>
          <span
            className="border-r-2 pr-4 border-gray-100 md:border-none hover:cursor-pointer md:p-2"
            id="category__donburi"
            onClick={() => {
              handleClick("donburi");
              setUnderline("donburi");
            }}
          >Donburi</span>
          <span
            className="pr-4 hover:cursor-pointer md:p-2"
            id="category__coldnoodles"
            onClick={() => {
              handleClick("cold noodles");
              setUnderline("coldnoodles");
            }}
          >Cold Noodles</span>
        </div>

        <div className="md:grid md:grid-cols-2 px-2 xl:grid-cols-3 md:gap-x-4 md:gap-y-8 md:w-3/4 md:mr-8">{renderItems()}</div>
      </div>
    </div>
  )
}