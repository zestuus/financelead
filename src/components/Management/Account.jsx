import React from 'react';
import styled from "styled-components";
import {Grid} from "@material-ui/core";

const Card = styled(Grid)`
  height: 100%;
  border-radius: 10px;
  background-color: #2d4a76;
  color: white;
`;

const Account = ({ style }) => {
  return (
    <Card
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ ...style }}
    >
      Account
    </Card>
  );
};

export default Account;