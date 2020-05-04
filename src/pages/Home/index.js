/**
 *
 * Home
 *
 */

import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectHome } from "./slice";
import { HomeTag } from "./styles";
// import PropTypes from 'prop-types';

import Counter from "../../features/Counter/counter";
import Product from "../../features/Product";

function Home() {
  // const HomeState = useSelector(selectHome);
  // const dispatch = useDispatch();
  return (
    <HomeTag>
      <Counter />
      <Product />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </HomeTag>
  );
}

Home.propTypes = {};

export default Home;
