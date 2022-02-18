import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { carmenPlugin, CarmenPage } from '../src/plugin';

createDevApp()
  .registerPlugin(carmenPlugin)
  .addPage({
    element: <CarmenPage />,
    title: 'Root Page',
    path: '/carmen'
  })
  .render();
