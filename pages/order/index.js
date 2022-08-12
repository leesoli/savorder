import Header from '../../components/Header';
import { useContext } from 'react';
import { Context } from '../../contexts/index';

export default function Order () {
  const {orderItems} = useContext(Context);

  return (
    <div>
      <Header/>
      <div>
        Order
      </div>
    </div>
  )
}