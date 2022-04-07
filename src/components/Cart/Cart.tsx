import { 
  CartItems, 
  DivTotal,
  DivActions,
} from "./Cart.styles";

interface CartProps {

}

const Cart = (props: CartProps) => {
  const cartItems = <CartItems>{
    [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  )}</CartItems>;

  return (
    <div>
      {cartItems}
      <DivTotal>
        <span>Total Amount</span>
        <span>35.62</span>
      </DivTotal>
      <DivActions>
        <button style={{ color: '#8a2b06' }}>Close</button>
        <button style={{ backgroundColor: '#8a2b06', color: 'white' }}>Order</button>
      </DivActions>
    </div>
  );
};

export default Cart;