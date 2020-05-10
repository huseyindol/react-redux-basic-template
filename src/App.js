import React from "react";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { firebaseInit } from "./config/firebase";

import Header from "./features/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Auth from "./pages/Auth";

function App() {
  const user = firebaseInit.auth().currentUser;
  console.log(user);
  return (
    <HelmetProvider>
      <div className="App">
        <Header></Header>
        {user !== null ? (
          <React.Fragment>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/about"} component={AboutMe}></Route>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path={"/"} component={Auth}></Route>
          </React.Fragment>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
