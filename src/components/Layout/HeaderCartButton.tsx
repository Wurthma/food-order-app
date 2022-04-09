import CartIcon from '../Cart/CartIcon';
import { CartButton, CartBadge } from './HeaderCartButton.styles';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <CartButton onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <CartBadge>
        3
      </CartBadge>
    </CartButton>
  );
}

export default HeaderCartButton;