import React, { useState, useEffect } from 'react';
import data from "../public/data.json";

const Context = React.createContext();

function ContextProvider({children}) {

const [orderItems, setOrderItems] = useState([]);

useEffect(() => {
  console.log('data', data);
  setOrderItems(data);
}, []);


return (
  <Context.Provider
    value={{
      orderItems
    }}
  >
    {children}
  </Context.Provider>
)

}

export {ContextProvider, Context}