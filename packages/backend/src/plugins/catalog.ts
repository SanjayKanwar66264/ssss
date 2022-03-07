import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
<<<<<<< HEAD
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
=======
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { FrobsProvider } from './FrobsProvider';
>>>>>>> fdadc29 (asfda)

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
<<<<<<< HEAD
  builder.addProcessor(new ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
=======
  const frobs = new FrobsProvider('production', env.reader);
  builder.addEntityProvider(frobs);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  await frobs.run();
>>>>>>> fdadc29 (asfda)
  return router;
}
