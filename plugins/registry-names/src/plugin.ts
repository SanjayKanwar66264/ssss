import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const registryNamesPlugin = createPlugin({
  id: 'registry-names',
  routes: {
    root: rootRouteRef,
  },
});

export const RegistryNamesPage = registryNamesPlugin.provide(
  createRoutableExtension({
    name: 'RegistryNamesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
