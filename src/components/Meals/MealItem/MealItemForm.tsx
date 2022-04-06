import Input from "../../UI/Input";
import { MealItemStyledForm } from "./MealItemForm.styles";

interface MealItemFormProps {
  id: string;
}

const MealItemForm = (props: MealItemFormProps) => {
  return(
    <MealItemStyledForm>
      <Input label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '1',
        step: '1',
        defaultValue: '1',
      }} />
      <button>+ Add</button>
    </MealItemStyledForm>
  );
}

export default MealItemForm;