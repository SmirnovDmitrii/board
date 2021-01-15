import * as React from "react";
import { useEffect } from "react";
import Widget from "./Widget";

const App = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <h2>weather application</h2>
      <Widget />
    </div>
  );
};

export default App;
