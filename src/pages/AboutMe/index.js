/**
 *
 * AboutMe
 *
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { selectAboutMe } from "./slice";
import { AboutMeTag, AboutMeContainer } from "./styles";
// import PropTypes from 'prop-types';

function AboutMe() {
  const AboutMeState = useSelector(selectAboutMe);
  const dispatch = useDispatch();
  return (
    <AboutMeTag>
      <Helmet>
        <title>AboutMe Page</title>
        <meta name="description" content="Description of AboutMe Page" />
      </Helmet>
      <AboutMeContainer>AboutMe Pages</AboutMeContainer>
    </AboutMeTag>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
