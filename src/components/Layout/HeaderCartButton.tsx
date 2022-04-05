import CartIcon from '../Cart/CartIcon';
import { CartButton, CartBadge } from './HeaderCartButton.styles';

interface HeaderCartButtonProps {

}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
    return(
        <CartButton>
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