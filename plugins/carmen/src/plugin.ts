import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const carmenPlugin = createPlugin({
  id: 'carmen',
  routes: {
    root: rootRouteRef,
  },
});

export const CarmenPage = carmenPlugin.provide(
  createRoutableExtension({
    name: 'CarmenPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
