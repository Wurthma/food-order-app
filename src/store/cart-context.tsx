import React from 'react';
import { IItem } from '../shared/interfaces/IItem';

const CartContext = React.createContext({
    items:  new Array<IItem>(),
    totalAmount: 0,
    addItem: (item: IItem) => {},
    removeItem: (item: IItem) => {}
});

export default CartContext;