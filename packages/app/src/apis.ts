import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
} from '@backstage/core-plugin-api';
<<<<<<< HEAD
=======
import { techRadarApiRef } from '@backstage/plugin-tech-radar';
import { NexusTechRadar } from './lib/tech-radar/nexus-tech-radar';
>>>>>>> fdadc29 (asfda)

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
<<<<<<< HEAD
=======
  createApiFactory(techRadarApiRef, new NexusTechRadar()),
>>>>>>> fdadc29 (asfda)
];
