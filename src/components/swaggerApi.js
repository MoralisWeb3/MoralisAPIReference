import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";
function App() {
  return (
    <div className="App">
      <SwaggerUI url="https://deep-index.moralis.io/api-docs/v2/swagger.json" />
    </div>
  );
}

export default App;

