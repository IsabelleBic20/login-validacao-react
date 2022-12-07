import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./src/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
  </React.StrictMode>
);
