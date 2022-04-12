import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import { MealItemLi, MealItemDescription, MealItemPrice } from "./MealItem.styles";
import CartContext from '../../../store/cart-context';

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = (props: MealItemProps) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({ 
      id: props.id, 
      name: props.name, 
      amount: amount, 
      price: props.price
    });
  };

  return (
    <MealItemLi>
      <div>
        <h3>{props.name}</h3>
        <MealItemDescription>{props.description}</MealItemDescription>
        <MealItemPrice>{price}</MealItemPrice>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </MealItemLi>
  );
}

export default MealItem;