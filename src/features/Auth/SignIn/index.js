/**
 *
 * SignIn
 *
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSignIn } from "./slice";
import { SignInTag } from "./styles";
// import PropTypes from 'prop-types';
import { firebaseInit } from "../../../config/firebase";

function SignIn() {
  const SignInState = useSelector(selectSignIn);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const onSubmitHandle = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log("signup submit", formData);
    firebaseInit
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((e) => {
        setUser({ email: e.user.email, id: e.user.uid });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode", errorCode);
        console.log("errorMessage", errorMessage);
      });
  };
  useEffect(() => {
    if (Object.keys(user).length) {
      const currentUser = firebaseInit.auth().currentUser;
      console.log("useEffect", user, currentUser);
    }
  }, [user]);
  return (
    <SignInTag>
      SignIn
      <form onSubmit={onSubmitHandle}>
        <input name="email" />
        <input name="password" />
        <button type="submit">Giriş</button>
      </form>
    </SignInTag>
  );
}

SignIn.propTypes = {};

export default SignIn;
