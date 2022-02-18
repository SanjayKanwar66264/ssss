import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { registryNamesPlugin, RegistryNamesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(registryNamesPlugin)
  .addPage({
    element: <RegistryNamesPage />,
    title: 'Root Page',
    path: '/registry-names'
  })
  .render();
