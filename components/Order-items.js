import {useContext, useState, useEffect} from "react"
import {Context} from "../pages/Context";

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
    <div></div>
  )
}