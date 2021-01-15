import * as React from "react";

const WeatherWidget = React.lazy(() => import("weather/Widget"));

const App = () => (
  <div>
    <h2>Main application</h2>
    <React.Suspense fallback="Loading Button">
      <WeatherWidget />
    </React.Suspense>
  </div>
);

export default App;
