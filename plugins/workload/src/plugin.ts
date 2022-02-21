import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const workloadPlugin = createPlugin({
  id: 'workload',
  routes: {
    root: rootRouteRef,
  },
});

export const WorkloadPage = workloadPlugin.provide(
  createRoutableExtension({
    name: 'WorkloadPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
