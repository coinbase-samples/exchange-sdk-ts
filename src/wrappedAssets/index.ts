/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CoinbaseExchangeClient } from 'src/client';
import {
  ListRedeemsRequest,
  ListRedeemsResponse,
  ListStakeWrapsRequest,
  ListStakeWrapsResponse,
  ListWrappedAssetsRequest,
  ListWrappedAssetsResponse,
  GetConversionRateRequest,
  GetConversionRateResponse,
  GetRedeemRequest,
  GetRedeemResponse,
  GetStakeWrapRequest,
  GetStakeWrapResponse,
  GetWrappedAssetRequest,
  GetWrappedAssetResponse,
  CreateRedeemRequest,
  CreateRedeemResponse,
  CreateStakeWrapRequest,
  CreateStakeWrapResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IWrappedAssetsService {
  listRedeems(request: ListRedeemsRequest): Promise<ListRedeemsResponse>;
  listStakeWraps(
    request: ListStakeWrapsRequest
  ): Promise<ListStakeWrapsResponse>;
  listWrappedAssets(
    request: ListWrappedAssetsRequest
  ): Promise<ListWrappedAssetsResponse>;
  getConversionRate(
    request: GetConversionRateRequest
  ): Promise<GetConversionRateResponse>;
  getRedeem(request: GetRedeemRequest): Promise<GetRedeemResponse>;
  getStakeWrap(request: GetStakeWrapRequest): Promise<GetStakeWrapResponse>;
  getWrappedAsset(
    request: GetWrappedAssetRequest
  ): Promise<GetWrappedAssetResponse>;
  createRedeem(request: CreateRedeemRequest): Promise<CreateRedeemResponse>;
  createStakeWrap(
    request: CreateStakeWrapRequest
  ): Promise<CreateStakeWrapResponse>;
}

export class WrappedAssetsService implements IWrappedAssetsService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listRedeems(
    request: ListRedeemsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListRedeemsResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/redeem`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListRedeemsResponse;
  }

  async listStakeWraps(
    request: ListStakeWrapsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListStakeWrapsResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/stake-wrap`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListStakeWrapsResponse;
  }

  async listWrappedAssets(
    request: ListWrappedAssetsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListWrappedAssetsResponse> {
    const response = await this.client.request({
      url: `wrapped-assets`,
      callOptions: options,
    });

    return response.data as ListWrappedAssetsResponse;
  }

  async getConversionRate(
    request: GetConversionRateRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetConversionRateResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/${request.wrappedAssetId}/conversion-rate`,
      callOptions: options,
    });

    return response.data as GetConversionRateResponse;
  }

  async getRedeem(
    request: GetRedeemRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetRedeemResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/redeem/${request.redeemId}`,
      callOptions: options,
    });

    return response.data as GetRedeemResponse;
  }

  async getStakeWrap(
    request: GetStakeWrapRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetStakeWrapResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/stake-wrap/${request.stakeWrapId}`,
      callOptions: options,
    });

    return response.data as GetStakeWrapResponse;
  }

  async getWrappedAsset(
    request: GetWrappedAssetRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetWrappedAssetResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/${request.wrappedAssetId}`,
      callOptions: options,
    });

    return response.data as GetWrappedAssetResponse;
  }

  async createRedeem(
    request: CreateRedeemRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateRedeemResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/redeem`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateRedeemResponse;
  }

  async createStakeWrap(
    request: CreateStakeWrapRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateStakeWrapResponse> {
    const response = await this.client.request({
      url: `wrapped-assets/stake-wrap`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateStakeWrapResponse;
  }
}
