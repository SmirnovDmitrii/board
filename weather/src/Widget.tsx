import * as React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { City } from "./components/Forms/City";
import { CurrentTemp } from "./components/CurrentTemp";
import { Icon } from "./components/Icon";

import { api } from "./constants";

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 8px;
`;

const Title = styled.h4``;

export interface Temperature {
  temp: number;
  feelsLike: number;
  icon: string;
  description: string;
}

const Widget = () => {
  const [tempParams, setTempParams] = useState<Temperature | null>(null);
  const [cityValue, setCityValue] = useState("");
  const [currentCity, setCurrentCity] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async (counter: number) => {
      if (!currentCity || counter === 0) return;
      try {
        const url = `${api.current}?${api.city(currentCity)}&${api.query}`;
        const response = await fetch(url);
        const weatherData = await response.json();
        const { temp, feels_like: feelsLike } = weatherData.main;
        const { icon, description } = weatherData.weather[0];
        setTempParams({ temp, feelsLike, icon, description });
      } catch (e) {
        getWeather(counter - 1);
      }
    };
    getWeather(5);
  }, [currentCity]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCityValue(e.target.value);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentCity(cityValue);
    setCityValue("");
  };

  return (
    <WidgetContainer>
      <Title>{currentCity ? currentCity : "Введите название города"}</Title>
      <City
        value={cityValue}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
      {tempParams && (
        <>
          <CurrentTemp tempParams={tempParams} />
          <Icon icon={tempParams.icon} description={tempParams.description} />
        </>
      )}
    </WidgetContainer>
  );
};

export default Widget;
