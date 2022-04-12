import React from "react";
import { StyledInput } from "./Input.styles"

export interface InputConfig {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}
interface InputProps {
  label: string;
  input: InputConfig;
}

const Input = React.forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <StyledInput>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </StyledInput>
  );
});

export default Input;