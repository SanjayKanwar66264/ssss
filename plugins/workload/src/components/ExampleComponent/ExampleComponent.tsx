import React from 'react';
import { Header, Page } from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { Box, Tab, Tabs } from '@material-ui/core';

export const ExampleComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Page themeId="tool">
      <Header
        title="Welcome to workload!"
        subtitle="Optional subtitle"
      ></Header>
      <Box sx={{ width: '84vw', height: '98vh' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab label="Dev" />
          <Tab label="Prd" />
        </Tabs>
        <ExampleFetchComponent />
      </Box>
    </Page>
  );
};
