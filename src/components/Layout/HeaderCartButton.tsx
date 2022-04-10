import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import { CartButton, CartBadge } from './HeaderCartButton.styles';
import CartContext from '../../store/cart-context';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  return (
    <CartButton onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <CartBadge>
        {numberOfCartItems}
      </CartBadge>
    </CartButton>
  );
}

export default HeaderCartButton;