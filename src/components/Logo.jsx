import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import { Grid } from '@material-ui/core';

import logo from '../logo.svg';
import {PRIMARY_COLOR} from "../constants/config";

const LogoImage = styled.img`
  height: 32px;
`;

const LogoBlock = styled(Link)`
  width: 175px;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 5px;
  padding: 5px;
  margin: 15px 20px;
  text-decoration: none;
`;

const LogoHeader = styled.h2`
  margin: 0 0 0 5px;
  color: ${PRIMARY_COLOR};
`;

const Logo = () => (
  <LogoBlock to="/">
    <Grid container alignItems="center">
      <LogoImage src={logo} alt=""/>
      <LogoHeader>financelead</LogoHeader>
    </Grid>
  </LogoBlock>
);

export default Logo;