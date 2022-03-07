import { UrlReader } from '@backstage/backend-common';
import { Entity } from '@backstage/catalog-model';
import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-backend';

/**
 * Provides entities from fictional frobs service.
 */
const DATA = {
  apiVersion: 'backstage.io/v1alpha1',
  kind: 'Component',
  metadata: {
    name: 'soraka',
    description: 'A collection of all Backstage example components',
    annotations: {
      "backstage.io/managed-by-origin-location": "system-x:http://localhost:8080",
      "backstage.io/managed-by-location": "system-x:http://localhost:8080"
    },
  },

  spec: {
    type: 'service',
    lifecycle: 'prod',
    owner: 'sanjay-kanwar',
    provideApis: ['petstore', 'HELLO WORLD'],
  },
};
export class FrobsProvider implements EntityProvider {
  private readonly env: string;
  private readonly reader: UrlReader;
  private connection?: EntityProviderConnection;

  /** [1] **/
  constructor(env: string, reader: UrlReader) {
    this.env = env;
    this.reader = reader;
  }

  /** [2] **/
  getProviderName(): string {
    return `frobs-${this.env}`;
  }

  /** [3] **/
  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
  }

  /** [4] **/
  async run(): Promise<void> {
    if (!this.connection) {
      throw new Error('Not initialized');
    }
    const entities: Entity[] = [DATA];
    try {
      await this.connection.applyMutation({
        type: 'full',
        entities: entities.map(entity => ({
          entity,
          locationKey: `frobs-provider:${this.env}`,
        })),
      });
    } catch (e) {
      console.log(`ERROR+++++++++++++++++++++++++++++++++++${e}`);
    }
  }
}
