import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { workloadPlugin, WorkloadPage } from '../src/plugin';

createDevApp()
  .registerPlugin(workloadPlugin)
  .addPage({
    element: <WorkloadPage />,
    title: 'Root Page',
    path: '/workload'
  })
  .render();
