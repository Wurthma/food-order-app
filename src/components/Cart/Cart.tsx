import { useContext } from "react";
import Modal from "../UI/Modal";
import {
  CartItems,
  DivTotal,
  DivActions,
} from "./Cart.styles";
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import { IItem } from "../../shared/interfaces/IItem";

interface CartProps {
  onClose: () => void;
}

const Cart = (props: CartProps) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoverHandler = (id: string) => {};

  const cartItemAddHandler = (item: IItem) => {};

  const cartItems = <CartItems>{
    cartCtx.items.map(
      (item) => (
        <CartItem 
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoverHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      )
    )}</CartItems>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <DivTotal>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </DivTotal>
      <DivActions>
        <button onClick={props.onClose} style={{ color: '#8a2b06' }}>Close</button>
        {hasItems && <button style={{ backgroundColor: '#8a2b06', color: 'white' }}>Order</button>}
      </DivActions>
    </Modal>
  );
};

export default Cart;