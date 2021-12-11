import React from 'react';
import styled from "styled-components";

import {
  Container, Form, FormError, FormItem, Input, SubmitButton, Title
} from "./SignIn";
import Grid from "@material-ui/core/Grid";
import { useFormHandler } from '../utils/hooks';
import { FORM_TYPE } from '../constants/enums';
import withSettings from './HOCs/withSettings';

const SignUpForm = styled(Form)`
  height: 600px;
`;

export const SignUpTitle = styled(Title)`
  margin-top: 0;
`;

const SignUp = ({ onLogin, translate: __ }) => {
  const [
    formErrors, handleChange, handleBlur, handleSubmit
  ] = useFormHandler(FORM_TYPE.SIGN_UP, onLogin, __);

  return (
    <Container container justifyContent="center" alignItems="center">
      <SignUpForm item container direction="column" justifyContent="space-between">
        <Grid container direction="column">
          <SignUpTitle>{__('Sign Up')}</SignUpTitle>
          <FormError visible={!formErrors['form']}>
            {formErrors['form']}
          </FormError>
        </Grid>
        <FormItem>
          <Input
            required
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            error={!!formErrors['email']}
            helperText={formErrors['email']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem>
          <Input
            required
            label={__('Password')}
            variant="outlined"
            name="password"
            type="password"
            error={!!formErrors['password']}
            helperText={formErrors['password']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem>
          <Input
            required
            label={__('Repeat password')}
            variant="outlined"
            name="password_repeat"
            type="password"
            error={!!formErrors['password_repeat']}
            helperText={formErrors['password_repeat']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem>
          <Input
            label={__('First name')}
            variant="outlined"
            name="first_name"
            error={!!formErrors['first_name']}
            helperText={formErrors['first_name']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem>
          <Input
            label={__('Last name')}
            variant="outlined"
            name="last_name"
            error={!!formErrors['last_name']}
            helperText={formErrors['last_name']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <SubmitButton
          variant="contained"
          onClick={handleSubmit}
        >
          {__('Submit')}
        </SubmitButton>
      </SignUpForm>
    </Container>
  );
};

export default withSettings(SignUp);