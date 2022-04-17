import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import { CartButton, CartBadge } from './HeaderCartButton.styles';
import CartContext from '../../store/cart-context';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <CartButton isAnimated={btnIsHighlighted} onClick={props.onClick}>
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