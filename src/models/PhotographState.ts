import {Photograph} from './Photograph';

export interface PhotographState extends Photograph {
  captured: boolean;
  missing: boolean;
  path: string;
}
