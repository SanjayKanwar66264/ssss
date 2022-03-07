import {
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
  
  export class NexusTechRadar implements TechRadarApi {
    async load(id: string | undefined): Promise<TechRadarLoaderResponse> {  
      const data = await fetch('http://localhost:7007/api/tech-radar').then(res => res.json());
      return data;
    }
  }