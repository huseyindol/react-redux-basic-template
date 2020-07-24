/**
 *
 * Header
 *
 */

import React, { memo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectHeader } from "./slice";
import { HeaderTag } from "./styles";
// import PropTypes from 'prop-types';
import logo from "../../logo.svg";

function Header() {
  // const HeaderState = useSelector(selectHeader);
  // const dispatch = useDispatch();
  return (
    <HeaderTag>
      <img src={logo} className="App-logo" alt="logo" />
    </HeaderTag>
  );
}

Header.propTypes = {};

export default memo(Header);
