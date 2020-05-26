import React from "react";
import "./styles.css";
import HomePage from "./Component/Common/HomePage"
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <HomePage/> */}
      </BrowserRouter>
    </div>
  );
}
