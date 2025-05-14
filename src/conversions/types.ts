import { Brand } from '../shared/brand';
import { Conversion, ConversionFee } from '../model';
import { PostConversionRequest } from '../model/internal';

export type ListConversionsRequest = {
  profileId?: string;
  before?: string;
  after?: string;
  limit?: number;
};

export type ListConversionsResponse = Brand<
  Conversion[],
  'ListConversionsResponse'
>;

export type GetConversionRequest = {
  conversionId: string;
  profileId?: string;
};

export type GetConversionResponse = Brand<Conversion, 'GetConversionResponse'>;

export type GetConversionFeeRatesRequest = Record<string, never>;

export type GetConversionFeeRatesResponse = Brand<
  ConversionFee,
  'GetConversionFeeRatesResponse'
>;

export type CreateConversionRequest = Brand<
  PostConversionRequest,
  'CreateConversionRequest'
>;
export type CreateConversionResponse = Brand<
  Conversion,
  'CreateConversionResponse'
>;
