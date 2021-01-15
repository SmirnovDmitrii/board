import * as React from "react";
import styled from "styled-components";

interface CityProps {
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Input = styled.input`
  margin-bottom: 8px;
`;

export const City = (props: CityProps) => {
  const { value, changeHandler, submitHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      <Input type="text" name="city" onChange={changeHandler} value={value} />
    </form>
  );
};
