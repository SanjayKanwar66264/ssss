import { workloadPlugin } from './plugin';

describe('workload', () => {
  it('should export plugin', () => {
    expect(workloadPlugin).toBeDefined();
  });
});
