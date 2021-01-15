import * as React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Input = styled.input`
  margin-bottom: 8px;
`;

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 8px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const city = "Ижевск";
const apiKey = "010c77dd61b4a432046abd8f5332d49b";
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
const getIconUrl = (code: string) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

interface Temperature {
  temp: number;
  feelsLike: string;
}

const Widget = () => {
  const [iconUrl, setIconUrl] = useState("");
  const [temperature, setTemperature] = useState<Temperature | null>(null);
  const [cityValue, setCityValue] = useState("");
  const [title, setTitle] = useState('Введите название города');

  useEffect(() => {
    const getWeather = async (counter: number) => {
      if (counter === 0) return;
      try {
        const response = await fetch(api);
        const weatherData = await response.json();
        const { temp, feels_like: feelsLike } = weatherData.main;
        const { icon } = weatherData.weather[0];
        setTemperature({ temp, feelsLike });
        setIconUrl(getIconUrl(icon));
      } catch (e) {
        getWeather(counter - 1);
      }
    };
    getWeather(5);
  }, [title]);

  const inputCity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCityValue(e.target.value);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle(cityValue);
    setCityValue('');
  };

  return (
    <WidgetContainer>
      <h4>{title}</h4>
      <form onSubmit={submitHandler}>
        <Input type="text" name="city" onChange={inputCity} value={cityValue} />
      </form>
      {temperature && (
        <p>
          {temperature.temp}&#176;
          <span> (feels like {temperature.feelsLike})&#176;</span>
        </p>
      )}
      <Icon src={iconUrl} alt="icon weather" />
    </WidgetContainer>
  );
};

export default Widget;
