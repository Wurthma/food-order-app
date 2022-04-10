import React from 'react';
import { IItems } from '../shared/interfaces/IItems';

const CartContext = React.createContext({
    items:  new Array<IItems>(),
    totalAmount: 0,
    addItem: (item: string) => {},
    removeItem: (id: number) => {}
});

export default CartContext;