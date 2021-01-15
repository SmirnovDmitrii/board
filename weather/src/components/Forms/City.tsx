import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

interface CityProps {
  onFormSubmit: (value: string) => void;
}

const Input = styled.input`
  margin-bottom: 8px;
`;

export const City = (props: CityProps) => {
  const [cityValue, setCityValue] = useState("");
  const { onFormSubmit } = props;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setCityValue(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(cityValue);
    setCityValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="city" onChange={changeHandler} value={cityValue} />
    </form>
  );
};
