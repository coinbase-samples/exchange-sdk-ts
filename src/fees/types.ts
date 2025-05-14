import { Brand } from '../shared/brand';
import { Fees } from '../model';

export type GetFeesRequest = Record<string, never>;
export type GetFeesResponse = Brand<Fees, 'GetFeesResponse'>;
