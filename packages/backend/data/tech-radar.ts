import {
  RadarRing,
  RadarEntry,
  RadarQuadrant,
} from '@backstage/plugin-tech-radar';
import { languages } from './languages';
import { techniques } from './techniques';
import { tools } from './tools';
import { platforms } from './platforms';

export const rings = new Array<RadarRing>();
rings.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' });
rings.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' });
rings.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });
rings.push({ id: 'use', name: 'USE', color: '#93c47d' });

export const quadrants = new Array<RadarQuadrant>();
quadrants.push({ id: 'languages', name: 'Languages' });
quadrants.push({ id: 'techniques', name: 'Techniques' });
quadrants.push({ id: 'tools', name: 'Tools' });
quadrants.push({ id: 'platforms', name: 'Platforms' });

export const entries = new Array<RadarEntry>();
entries.push(...languages, ...techniques, ...tools, ...platforms);
