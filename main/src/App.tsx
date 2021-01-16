import * as React from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const WeatherWidget = React.lazy(() => import("weather/Widget"));

const App = () => (
  <div>
    <h2>Board</h2>
    <ErrorBoundary>
      <React.Suspense fallback="Loading Button">
        <WeatherWidget />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
