import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./features/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route exact path={"/"} component={Home}></Route>
      <Route exact path={"/about"} component={AboutMe}></Route>
    </div>
  );
}

export default App;
