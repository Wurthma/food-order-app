import CartContext from './cart-context';
import { useReducer } from 'react';
import { IItem } from '../shared/interfaces/IItem';
import { ICartContextAction } from '../shared/interfaces/ICartContextAction';

interface CartProviderProps {
  children: React.ReactNode;
}

const defaultCartState = {
  items: new Array<IItem>(),
  totalAmount: 0
};

// TODO: remove this ANY type
const cartReducer = (state: any, action: ICartContextAction) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + (action.item?.price ?? 0) * (action.item?.amount ?? 0);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
};

const CartProvider = (props: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: IItem) => {
    dispatchCartAction({ type: 'ADD', item: item, id: Math.random() });
  };

  const removeItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };
  
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return(
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;