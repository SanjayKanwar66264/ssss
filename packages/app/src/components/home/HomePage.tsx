import { HomePageCompanyLogo } from '@backstage/plugin-home';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';

export const HomePage = () => (
    <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <HomePageCompanyLogo />
    </Grid>
  </Grid>
);