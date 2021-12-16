import React from 'react';
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import withSettings from "../HOCs/withSettings";
import { Border } from "../Header";
import AccountsSlider from "./AccountsSlider";
import {Button} from "@material-ui/core";

const Section = styled(Grid)`
  padding: 0 10px;
`;

const Transactions = ({ translate: __}) => {
  return (
    <Grid container justifyContent="center">
      <Section item container lg={10} sm={11} direction="column">
        <Grid container justifyContent="space-between" alignItems="center">
          <h3>{__('Accounts')}</h3>
          <Button
            variant="contained"
          >
            {__('Add new account')}
          </Button>
        </Grid>
        <AccountsSlider />
      </Section>
      <Grid container direction="column" alignItems="stretch">
        <Border />
      </Grid>
      <Section item container lg={10} sm={11} direction="column">
        <h3>{__('Transactions')}</h3>
      </Section>
    </Grid>
  );
};

export default withSettings(Transactions);