import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ReactDom.render(<App />, document.getElementById("app"))

const root = createRoot(document.getElementById("app"));
root.render(<App />);

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     console.log("a module replaced");
//   });
// }
