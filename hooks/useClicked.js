import {useState, useEffect, useRef} from "react";

export default function useClicked() {
  const [clicked, setClicked] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }

  useEffect(() => {
    const myRef = ref.current;
    myRef.addEventListener("click", handleClick);

    return () => {
      myRef.removeEventListener("click", handleClick);
    }

  }, []);

  return [clicked, ref];
}