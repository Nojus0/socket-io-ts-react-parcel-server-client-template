import React, { StrictMode } from "react"
import ReactDOM from "react-dom";
import WSContextProvider from "./src/WSContext";
import App from "./src/App"

ReactDOM.render(
    <WSContextProvider>
        <App />
    </WSContextProvider>,
    document.getElementById("root")
)