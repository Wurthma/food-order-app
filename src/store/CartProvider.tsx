import CartContext from './cart-context';
import { useReducer } from 'react';
import { IItem } from '../shared/interfaces/IItem';
import { IItems } from '../shared/interfaces/IItems';
import { ICartContextAction } from '../shared/interfaces/ICartContextAction';

interface CartProviderProps {
  children: React.ReactNode;
}

const defaultCartState: IItems = {
  items: new Array<IItem>(),
  totalAmount: 0
};

const cartReducer = (state: IItems, action: ICartContextAction) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + (action.item?.price ?? 0) * (action.item?.amount ?? 0);

    const existingCartItemIndex = state.items.findIndex(item => {
      return item.id === action.item?.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + (action.item?.amount ?? 0),
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => {
      return item.id === action.item?.id;
    });
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.item.id);
    }
    else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

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
    dispatchCartAction({ type: 'ADD', item: item, id: Math.random().toString() });
  };

  const removeItemFromCartHandler = (item: IItem) => {
    dispatchCartAction({ type: 'REMOVE', item: item, id: item.id });
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