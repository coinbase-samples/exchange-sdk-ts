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
  ListProductVolumesRequest,
  ListProductVolumesResponse,
  ListTradingPairsRequest,
  ListTradingPairsResponse,
  ListProductTradesRequest,
  ListProductTradesResponse,
  GetProductBookRequest,
  GetProductBookResponse,
  GetProductCandlesRequest,
  GetProductCandlesResponse,
  GetProductRequest,
  GetProductResponse,
  GetProductStatsRequest,
  GetProductStatsResponse,
  GetProductTickerRequest,
  GetProductTickerResponse,
} from './types';
import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';

export interface IProductsService {
  listTradingPairs(
    request: ListTradingPairsRequest
  ): Promise<ListTradingPairsResponse>;
  listVolumes(
    request: ListProductVolumesRequest
  ): Promise<ListProductVolumesResponse>;
  listTrades(
    request: ListProductTradesRequest
  ): Promise<ListProductTradesResponse>;
  getProductBook(
    request: GetProductBookRequest
  ): Promise<GetProductBookResponse>;
  getProductCandles(
    request: GetProductCandlesRequest
  ): Promise<GetProductCandlesResponse>;
  getProduct(request: GetProductRequest): Promise<GetProductResponse>;
  getProductStats(
    request: GetProductStatsRequest
  ): Promise<GetProductStatsResponse>;
  getProductTicker(
    request: GetProductTickerRequest
  ): Promise<GetProductTickerResponse>;
}

export class ProductsService implements IProductsService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listTradingPairs(
    request: ListTradingPairsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListTradingPairsResponse> {
    const response = await this.client.request({
      url: `products`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListTradingPairsResponse;
  }

  async listVolumes(
    request: ListProductVolumesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListProductVolumesResponse> {
    const response = await this.client.request({
      url: `coinbase-accounts`,
      callOptions: options,
    });

    return response.data as ListProductVolumesResponse;
  }

  async listTrades(
    request: ListProductTradesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListProductTradesResponse> {
    const queryParams = {
      ...request,
      productId: undefined,
    };
    const response = await this.client.request({
      url: `products/${request.productId}/trades`,
      queryParams,
      callOptions: options,
    });

    return response.data as ListProductTradesResponse;
  }

  async getProductBook(
    request: GetProductBookRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetProductBookResponse> {
    const queryParams = {
      ...request,
      productId: undefined,
    };
    const response = await this.client.request({
      url: `products/${request.productId}/book`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetProductBookResponse;
  }

  async getProductCandles(
    request: GetProductCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetProductCandlesResponse> {
    const queryParams = {
      ...request,
      productId: undefined,
    };
    const response = await this.client.request({
      url: `products/${request.productId}/candles`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetProductCandlesResponse;
  }

  async getProduct(
    request: GetProductRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetProductResponse> {
    const response = await this.client.request({
      url: `products/${request.productId}`,
      callOptions: options,
    });

    return response.data as GetProductResponse;
  }

  async getProductStats(
    request: GetProductStatsRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetProductStatsResponse> {
    const response = await this.client.request({
      url: `products/${request.productId}/stats`,
      callOptions: options,
    });

    return response.data as GetProductStatsResponse;
  }

  async getProductTicker(
    request: GetProductTickerRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetProductTickerResponse> {
    const response = await this.client.request({
      url: `products/${request.productId}/ticker`,
      callOptions: options,
    });

    return response.data as GetProductTickerResponse;
  }
}
