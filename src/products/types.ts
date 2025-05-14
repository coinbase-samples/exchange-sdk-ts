import { Brand } from '../shared/brand';
import {
  Product,
  ProductBook,
  ProductStats,
  ProductTrade,
  ProductVolume,
} from '../model';

export type ListTradingPairsRequest = {
  type?: string;
};

export type ListTradingPairsResponse = Brand<
  Product[],
  'ListTradingPairsResponse'
>;

export type ListProductVolumesRequest = Record<string, never>;
export type ListProductVolumesResponse = Brand<
  ProductVolume[],
  'ListProductVolumeResponse'
>;

export type ListProductTradesRequest = {
  productId: string;
  before?: string;
  after?: string;
  limit?: number;
};
export type ListProductTradesResponse = Brand<
  ProductTrade[],
  'ListProductTradesResponse'
>;

export type GetProductBookRequest = {
  productId: string;
  level?: number;
};
export type GetProductBookResponse = Brand<
  ProductBook,
  'GetProductBookResponse'
>;

export type GetProductRequest = {
  productId: string;
};
export type GetProductResponse = Brand<Product, 'GetProductResponse'>;

export type GetProductCandlesRequest = {
  productId: string;
  /*
   * must be one of the following "second" values: {60, 300, 900, 3600, 21600, 86400}
   */
  granularity?: string;
  start?: string;
  end?: string;
};
export type GetProductCandlesResponse = any;

export type GetProductStatsRequest = {
  productId: string;
};
export type GetProductStatsResponse = Brand<
  ProductStats,
  'GetProductStatsResponse'
>;

export type GetProductTickerRequest = {
  productId: string;
};
export type GetProductTickerResponse = Brand<
  ProductStats,
  'GetProductTickerResponse'
>;
