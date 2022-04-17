import { 
    CartItemLi,
    Summary,
    Amount,
    Price,
    Actions,
} from './CartItem.styles';

interface CartItemProps {
    name: string;
    price: number;
    amount: number;
    onRemove: () => void;
    onAdd: () => void;
}

const CartItem = (props: CartItemProps) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <CartItemLi>
      <div>
        <h2>{props.name}</h2>
        <Summary>
          <Price>{price}</Price>
          <Amount>x {props.amount}</Amount>
        </Summary>
      </div>
      <Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Actions>
    </CartItemLi>
  );
};

export default CartItem;
