import MealItemForm from "./MealItemForm";
import { MealItemLi, MealItemDescription, MealItemPrice } from "./MealItem.styles";

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = (props: MealItemProps) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <MealItemLi>
      <div>
        <h3>{props.name}</h3>
        <MealItemDescription>{props.description}</MealItemDescription>
        <MealItemPrice>{price}</MealItemPrice>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </MealItemLi>
  );
}

export default MealItem;