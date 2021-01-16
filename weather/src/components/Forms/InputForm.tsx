import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

interface InputFormProps {
  onFormSubmit: (value: string) => void;
  name: string;
}

const Input = styled.input`
  margin-bottom: 8px;
`;

export const InputForm = (props: InputFormProps) => {
  const [value, setValue] = useState("");
  const { onFormSubmit, name } = props;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name={name} onChange={changeHandler} value={value} />
    </form>
  );
};
