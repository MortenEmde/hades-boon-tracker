export type God = {
  name: string;
  title: string;
  affiliation: string;
  voice: string;
  symbol: string;
}

export type GodNameFromUrl = string | undefined;

export interface Gods {
  gods: Array<God>;
}

export type Boon = {
  name: string;
  slot: string;
  description: string;
  effect: string;
  rarity: Array<Rarity>;
  tier: string;
  notes: Array<string>;
  prerequisites: Array<string>;
  prerequisitesDuo: Array<string>;
}

export interface Boons {
  boons: Array<Boon>;
}

export type Rarity = {
  type: string;
  number: string;
}

interface ServiceInit {
  status: 'init';
}
interface ServiceLoading {
  status: 'loading';
}
interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}
interface ServiceError {
  status: 'error';
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;