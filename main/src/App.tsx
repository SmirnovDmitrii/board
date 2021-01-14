import * as React from "react";

const RemoteButton = React.lazy(() => import("weather/Button"));

const App = () => (
  <div>
    <h2>Main application</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
