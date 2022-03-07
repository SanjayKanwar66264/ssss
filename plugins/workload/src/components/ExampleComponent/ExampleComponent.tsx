import React from 'react';
import { Header, Page } from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { Box, Tab, Tabs } from '@material-ui/core';

export const ExampleComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return <ExampleFetchComponent />;
};
