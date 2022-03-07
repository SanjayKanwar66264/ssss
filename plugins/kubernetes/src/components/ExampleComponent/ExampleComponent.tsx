import React from 'react';
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { WorkloadPage } from '@internal/plugin-workload';
import { RegistryNamesPage } from '@internal/plugin-registry-names';
import { Header, Page, Content } from '@backstage/core-components';

export const ExampleComponent = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (_: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Page themeId="tool">
      <Header title="Welcome to Kubernetes"></Header>
      <Content>
        <Box sx={{ width: '100%' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <WorkloadPage />
            </TabPanel>
            <TabPanel value="2">
              <RegistryNamesPage />
            </TabPanel>
          </TabContext>
        </Box>
      </Content>
    </Page>
  );
};
