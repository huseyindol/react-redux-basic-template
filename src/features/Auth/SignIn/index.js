/**
 *
 * SignIn
 *
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSignIn } from "./slice";
import { modifiedData, selectMain } from "../../../app/slice";
import { SignInTag } from "./styles";
// import PropTypes from 'prop-types';
import { firebaseInit } from "../../../config/firebase";

function SignIn() {
  // const SignInState = useSelector(selectSignIn);
  const mainSelector = useSelector(selectMain);
  const dispatch = useDispatch();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log("signup submit", formData);
    firebaseInit
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        dispatch(modifiedData({ name: "error", error: null }));
      })
      .catch(function (error) {
        dispatch(modifiedData({ name: "error", error: { ...error } }));
      });
  };
  console.log("SignIn", mainSelector);
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
