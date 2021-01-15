export const api = {
  current: "https://api.openweathermap.org/data/2.5/weather",
  icon: (code: string) => `http://openweathermap.org/img/wn/${code}@2x.png`,
  city: (city: string) => `q=${city}`,
  query: `units=metric&lang=ru&appid=010c77dd61b4a432046abd8f5332d49b`,
};
