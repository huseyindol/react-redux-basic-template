import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import CircularProgress from "@material-ui/core/CircularProgress";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { firebaseInit } from "./config/firebase";

import { selectMain } from "./app/slice";

import Header from "./features/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Auth from "./pages/Auth";

function App() {
  const selector = useSelector(selectMain);
  const dispatch = useDispatch();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    let unsubscribe;
    const getUser = async () => {
      unsubscribe = await firebaseInit
        .auth()
        .onAuthStateChanged(function (user) {
          setUser(user);
        });
    };
    getUser();
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("App", selector, dispatch);
  return (
    <HelmetProvider>
      <div className="App">
        <Header></Header>
        {user !== undefined ? (
          user !== null ? (
            <React.Fragment>
              <button
                type="button"
                onClick={() => firebaseInit.auth().signOut()}
              >
                sign out
              </button>
              <Route exact path={"/"} component={Home}></Route>
              <Route exact path={"/about"} component={AboutMe}></Route>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route exact path={"/"} component={Auth}></Route>
            </React.Fragment>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
      {selector.error !== null && (
        <p>
          <b>{selector.error.code}</b>: {selector.error.message}
        </p>
      )}
    </HelmetProvider>
  );
}

export default App;
