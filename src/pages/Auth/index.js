/**
 *
 * Auth
 *
 */

import React from "react";
import { Helmet } from "react-helmet-async";
// import { useSelector, useDispatch } from "react-redux";
// import { selectAuth } from "./slice";
import { AuthTag, AuthContainer } from "./styles";
// import PropTypes from 'prop-types';
import SignIn from "../../features/Auth/SignIn";
// import SignUp from "../../features/Auth/SignUp";

function Auth() {
  // const AuthState = useSelector(selectAuth);
  // const dispatch = useDispatch();
  return (
    <AuthTag>
      <Helmet>
        <title>Auth Page</title>
        <meta name="description" content="Description of Auth Page" />
      </Helmet>
      <AuthContainer>
        <SignIn />
        {/* <SignUp /> */}
      </AuthContainer>
    </AuthTag>
  );
}

Auth.propTypes = {};

export default Auth;
