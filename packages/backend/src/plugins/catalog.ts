import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { FrobsProvider } from './FrobsProvider';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  const frobs = new FrobsProvider('production', env.reader);
  builder.addEntityProvider(frobs);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  await frobs.run();
  return router;
}
