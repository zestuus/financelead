import React, {useEffect, useState} from 'react';

import { Grid, TextField, Button } from "@material-ui/core";

import { Container } from "./SignIn";
import withSettings from './HOCs/withSettings';
import MFADialog from "./dialogs/MFADialog";
import ConfirmDialog from "./dialogs/ConfirmDialog";

import {disableMfa, enableMfa, getProfile} from "../api/user";

const Profile = ({ translate: __ }) => {
  const [profileData, setProfileData] = useState({});
  const [qrCode, setQrCode] = useState('');
  const [confirmDialogOpened, setConfirmDialogOpened] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const profile = await getProfile();

        setProfileData(profile);
      } catch (err) {
        setProfileData(null);
      }
    })();
  },[]);

  const disableMFA = async () => {
    const disabled = await disableMfa();

    if (disabled) {
      const profile = await getProfile();

      setProfileData(profile);
      setQrCode('');
      setConfirmDialogOpened(false);
    }
  };

  const enableMFA = async () => {
    const { qrcode } = await enableMfa();

    if (qrcode) {
      const profile = await getProfile();

      setProfileData(profile);
      setQrCode(qrcode);
    }
  };

  const handleClose = () => {
    setQrCode('');
  };

  return (
    <Grid container justifyContent="center">
      <Container item container md={9} xs={10}>
        {profileData === null ? <p>{__('Cannot get your profile info')}</p> : (
          <Grid container direction="column">
            <Grid container justifyContent="space-between" alignItems="center">
              <h1>{__('Profile')}</h1>
              <Button
                variant="contained"
                onClick={profileData.mfaEnabled ? ()=>setConfirmDialogOpened(true) : enableMFA}
                style={profileData.mfaEnabled ? { color: 'red' } : {}}
              >
                {profileData.mfaEnabled ? __('Disable') : __('Enable')} {__('multi-factor authentication')}
              </Button>
            </Grid>
            <h3>{__('First name')}</h3>
            <TextField InputProps={{ readOnly: true }} value={profileData.first_name || ''} />
            <h3>{__('Last name')}</h3>
            <TextField InputProps={{ readOnly: true }} value={profileData.last_name || ''} />
            <h3>Email</h3>
            <TextField InputProps={{ readOnly: true }} value={profileData.email || ''} />
          </Grid>
        )}
        <MFADialog
          isOpened={!!qrCode}
          qrCode={qrCode}
          onSubmit={()=>setConfirmDialogOpened(true)}
          onClose={handleClose}
        />
        <ConfirmDialog
          isOpened={confirmDialogOpened}
          submitButtonStyle={{ color: 'red' }}
          onSubmit={disableMFA}
          onClose={()=>setConfirmDialogOpened(false)}
          message={__('Do you really want to disable multi-factor authentication?')}
        />
      </Container>
    </Grid>
  );
};

export default withSettings(Profile);