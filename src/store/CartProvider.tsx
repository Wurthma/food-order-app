import CartContext from './cart-context';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider = (props: CartProviderProps) => {
  const addItemToCartHandler = (item: string) => {};
  const removeItemFromCartHandler = (id: number) => {};
  
  const cartContext = {
    items: [],
    totalAmount: 0,
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