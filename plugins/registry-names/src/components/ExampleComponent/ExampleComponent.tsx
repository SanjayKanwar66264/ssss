import React from 'react';
<<<<<<< HEAD
import { Grid } from '@material-ui/core';
import { Header, Page, Content } from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to registry names!"></Header>
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
=======
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => <ExampleFetchComponent />;
>>>>>>> fdadc29 (asfda)
