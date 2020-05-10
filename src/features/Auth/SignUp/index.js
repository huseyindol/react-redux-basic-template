/**
 *
 * SignUp
 *
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSignUp } from "./slice";
import { SignUpTag } from "./styles";
// import PropTypes from 'prop-types';
import { firebaseInit } from "../../../config/firebase";

function SignUp() {
  const SignUpState = useSelector(selectSignUp);
  const dispatch = useDispatch();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log("signup submit", formData);
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode);
        console.log("errorMessage", errorMessage);
      });
  };
  return (
    <SignUpTag>
      SignUp
      <form onSubmit={onSubmitHandle}>
        <input name="email" />
        <input name="password" />
        <button type="submit">Kaydet</button>
      </form>
    </SignUpTag>
  );
}

SignUp.propTypes = {};

export default SignUp;
