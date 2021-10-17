import React from "react";
import ReactDom from "react-dom";
import { App } from "./components/app";

// CSS 
import "./index.css";

const Main = () => {
    return <App></App>;
}

ReactDom.render(<Main></Main>, document.getElementById("root"))