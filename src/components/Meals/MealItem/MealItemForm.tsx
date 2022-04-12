import { useRef, useState } from "react";
import Input from "../../UI/Input";
import { MealItemStyledForm } from "./MealItemForm.styles";

interface MealItemFormProps {
  id: string;
  onAddToCart: (enteredAmountNumber: number) => void;
}

const MealItemForm = (props: MealItemFormProps) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value ?? '0';
    const enteredAmountNumber = Number(enteredAmount);

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return(
    <MealItemStyledForm onSubmit={e => submitHandler(e)}>
      <Input 
      ref={amountInputRef}
      label="Amount" 
      input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </MealItemStyledForm>
  );
}

export default MealItemForm;