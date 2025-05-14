import { Brand } from '../shared/brand';
import { Redeem, StakeWrap, WrappedAsset, WrappedAssets } from '../model';
import {
  PublicPostWrappedAssetRedeemRequest,
  PostWrappedAssetsRedeemResponse,
  PublicPostWrappedAssetStakeWrapRequest,
  PostWrappedAssetsStakeWrapResponse,
} from 'src/model/internal';

export type ListRedeemsRequest = {
  before?: string;
  after?: string;
  limit?: number;
  fromCurrency?: string;
  toCurrency?: string;
  status?: string;
};
export type ListRedeemsResponse = Brand<Redeem[], 'ListRedeemsResponse'>;

export type ListStakeWrapsRequest = {
  before?: string;
  after?: string;
  limit?: number;
  fromCurrency?: string;
  toCurrency?: string;
  status?: string;
};
export type ListStakeWrapsResponse = Brand<
  StakeWrap[],
  'ListStakeWrapsResponse'
>;

export type ListWrappedAssetsRequest = Record<string, never>;
export type ListWrappedAssetsResponse = Brand<
  WrappedAssets,
  'ListWrappedAssetsResponse'
>;

export type GetRedeemRequest = {
  redeemId: string;
};
export type GetRedeemResponse = Brand<Redeem, 'GetRedeemResponse'>;

export type GetStakeWrapRequest = {
  stakeWrapId: string;
};
export type GetStakeWrapResponse = Brand<StakeWrap, 'GetStakeWrapResponse'>;

export type GetWrappedAssetRequest = {
  wrappedAssetId: string;
};
export type GetWrappedAssetResponse = Brand<
  WrappedAsset,
  'GetWrappedAssetResponse'
>;

export type GetConversionRateRequest = {
  wrappedAssetId: string;
};
export type GetConversionRateResponse = {
  amount: string;
};

export type CreateRedeemRequest = Brand<
  PublicPostWrappedAssetRedeemRequest,
  'CreateRedeemRequest'
>;
export type CreateRedeemResponse = Brand<
  PostWrappedAssetsRedeemResponse,
  'CreateRedeemResponse'
>;

export type CreateStakeWrapRequest = Brand<
  PublicPostWrappedAssetStakeWrapRequest,
  'CreateStakeWrapRequest'
>;
export type CreateStakeWrapResponse = Brand<
  PostWrappedAssetsStakeWrapResponse,
  'CreateStakeWrapResponse'
>;
